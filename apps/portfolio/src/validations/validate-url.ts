export default function validateUrl(value: string): boolean {
  try {
    new URL(value.startsWith("http") ? value : `https://${value}`);

    return true;
  } catch {
    return false;
  }
}
