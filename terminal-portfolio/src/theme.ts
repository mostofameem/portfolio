export type Theme = "green" | "amber";

export const THEMES: Theme[] = ["green", "amber"];

export const themeMeta: Record<Theme, { label: string; phosphor: string }> = {
  green: { label: "Phosphor Green", phosphor: "#00FF00" },
  amber: { label: "Phosphor Amber", phosphor: "#FFB000" },
};
