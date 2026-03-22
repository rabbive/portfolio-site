const STORAGE_KEY = "portfolio-ui-sounds";

export function getUiSoundsEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.localStorage.getItem(STORAGE_KEY) !== "off";
}

export function setUiSoundsEnabled(on: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
}

/** Flip stored preference (works even when reduced-motion currently forces sounds off). */
export function toggleUiSoundsStoredPreference(): boolean {
  if (typeof window === "undefined") return false;
  const currentlyOff = window.localStorage.getItem(STORAGE_KEY) === "off";
  setUiSoundsEnabled(currentlyOff);
  return currentlyOff;
}
