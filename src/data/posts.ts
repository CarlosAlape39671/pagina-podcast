// Capa de datos para publicaciones (posts). Consultas a Supabase.
import { supabase } from '@/lib/supabase';
import type { Post, PostInput } from '@/types';

/** Lista todas las publicaciones, de la más reciente a la más antigua. */
export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

/** Crea una publicación (requiere sesión: lo aplica RLS en el servidor). */
export async function createPost(input: PostInput): Promise<Post> {
  const { data, error } = await supabase.from('posts').insert(input).select().single();
  if (error) throw error;
  return data;
}

/** Edita una publicación existente. */
export async function updatePost(id: string, patch: Partial<PostInput>): Promise<Post> {
  const { data, error } = await supabase
    .from('posts')
    .update(patch)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

/** Elimina una publicación. */
export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw error;
}
