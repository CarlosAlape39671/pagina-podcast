import { useEffect, useState, type FormEvent } from 'react';
import { getYouTubeId } from '@/lib/youtube';
import { createPost, updatePost } from '@/data/posts';
import type { Post, PostInput } from '@/types';
import { YouTubeEmbed } from '@/components/actualidad/YouTubeEmbed';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PostFormProps {
  editing: Post | null;
  onSaved: () => void;
  onCancel: () => void;
}

/** Crear o editar una publicación: enlace de YouTube + vista previa + meta (RF-05). */
export function PostForm({ editing, onSaved, onCancel }: PostFormProps) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(''); // yyyy-mm-dd
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar/limpiar el formulario según el modo (editar vs nuevo).
  useEffect(() => {
    if (editing) {
      setUrl(editing.youtube_url);
      setTitle(editing.title ?? '');
      setDescription(editing.description ?? '');
      setDate(editing.published_at ? editing.published_at.slice(0, 10) : '');
    } else {
      setUrl('');
      setTitle('');
      setDescription('');
      setDate('');
    }
    setError(null);
  }, [editing]);

  const youtubeId = getYouTubeId(url);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!youtubeId) {
      setError('Pega un enlace de YouTube válido (watch?v=, youtu.be/ o /shorts/).');
      return;
    }
    setSaving(true);
    setError(null);

    const input: PostInput = {
      youtube_url: url.trim(),
      youtube_id: youtubeId,
      title: title.trim() || null,
      description: description.trim() || null,
      published_at: date ? new Date(date).toISOString() : undefined,
    };

    try {
      if (editing) await updatePost(editing.id, input);
      else await createPost(input);
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo guardar la publicación.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          {editing ? 'Editar publicación' : 'Nueva publicación'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="url">Enlace de YouTube</Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              required
            />
          </div>

          {/* Vista previa */}
          {youtubeId ? (
            <YouTubeEmbed video={youtubeId} title={title || 'Vista previa'} />
          ) : (
            <div className="grid aspect-video place-items-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Vista previa del video
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="date">
              Fecha <span className="font-normal text-muted-foreground">(opcional)</span>
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-auto"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex gap-2">
            <Button type="submit" disabled={saving}>
              {saving ? 'Guardando…' : editing ? 'Guardar cambios' : 'Publicar'}
            </Button>
            {editing && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
