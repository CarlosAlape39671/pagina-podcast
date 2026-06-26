/** Formatea una fecha ISO a texto legible en español. Ej: "23 jun 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    // Las fechas (sin hora) se guardan a medianoche UTC; formateamos en UTC
    // para que no se corran un día en zonas horarias negativas (p. ej. UTC-5).
    timeZone: 'UTC',
  }).format(d);
}
