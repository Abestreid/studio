
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusVariant(status?: string): "default" | "destructive" | "secondary" | "outline" | null | undefined {
  if (!status) return 'secondary';
  if (status.includes('Время истекает')) return 'destructive';
  if (status.includes('Открыт')) return 'default';
  if (status.includes('Предварительное обсуждение')) return 'outline';
  return 'secondary';
}
