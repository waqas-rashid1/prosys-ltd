export const openRoleTitles = [
  "Senior Full-Stack Engineer",
  "AI/ML Engineer",
];

export const GENERAL_APPLICATION = "Open application / not sure";

export function isValidRole(role: string | undefined | null): boolean {
  if (!role) return true;
  return openRoleTitles.includes(role) || role === GENERAL_APPLICATION;
}
