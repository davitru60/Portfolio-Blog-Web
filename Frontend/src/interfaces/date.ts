export interface DateProps {
  locale: string;
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day: 'numeric' | '2-digit';
}
