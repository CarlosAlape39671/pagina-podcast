// Capa de datos para publicidad (ads). Consultas a Supabase.
import { supabase } from '@/lib/supabase';
import type { Ad, AdInput } from '@/types';

/** Lista los banners activos ordenados por posición. */
export async function getActiveAds(): Promise<Ad[]> {
  const { data, error } = await supabase
    .from('ads')
    .select('*')
    .eq('active', true)
    .order('position', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

/** Lista todos los banners (para el panel de administración). */
export async function getAllAds(): Promise<Ad[]> {
  const { data, error } = await supabase
    .from('ads')
    .select('*')
    .order('position', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function createAd(input: AdInput): Promise<Ad> {
  const { data, error } = await supabase.from('ads').insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updateAd(id: string, patch: Partial<AdInput>): Promise<Ad> {
  const { data, error } = await supabase.from('ads').update(patch).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

export async function deleteAd(id: string): Promise<void> {
  const { error } = await supabase.from('ads').delete().eq('id', id);
  if (error) throw error;
}
