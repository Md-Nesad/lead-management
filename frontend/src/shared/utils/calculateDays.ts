// utils/calculateDays.ts

export function calculateDaysRemaining(date: string) {
  const today = new Date();
  const followUpDate = new Date(date);

  const diff = followUpDate.getTime() - today.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
