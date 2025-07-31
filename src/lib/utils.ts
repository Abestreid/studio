import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusVariant(status?: string) {
  if (status?.includes('Время истекает')) return 'destructive';
  if (status?.includes('Открыт') || status?.includes('Предварительное обсуждение')) return 'default';
  return 'secondary';
}
