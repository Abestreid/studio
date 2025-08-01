
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusVariant(status?: string): "default" | "destructive" | "secondary" | "outline" | null | undefined {
  if (!status) return 'secondary';
  const lowerCaseStatus = status.toLowerCase();
  if (lowerCaseStatus.includes('время истекает')) return 'destructive';
  if (lowerCaseStatus.includes('открыт')) return 'default';
  if (lowerCaseStatus.includes('предварительное обсуждение')) return 'outline';
  return 'secondary';
}
