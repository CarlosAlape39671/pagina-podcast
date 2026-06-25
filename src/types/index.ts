// Tipos del dominio (coinciden con las tablas de supabase/schema.sql).

export interface Post {
  id: string;
  youtube_url: string;
  youtube_id: string;
  title: string | null;
  description: string | null;
  published_at: string; // ISO timestamptz
  created_at: string; // ISO timestamptz
}

export interface Ad {
  id: string;
  image_url: string;
  link_url: string | null;
  position: number;
  active: boolean;
}

/** Datos para crear/editar una publicación (sin campos autogenerados). */
export type PostInput = {
  youtube_url: string;
  youtube_id: string;
  title?: string | null;
  description?: string | null;
  published_at?: string | null;
};

/** Datos para crear/editar un banner de publicidad. */
export type AdInput = {
  image_url: string;
  link_url?: string | null;
  position?: number;
  active?: boolean;
};
