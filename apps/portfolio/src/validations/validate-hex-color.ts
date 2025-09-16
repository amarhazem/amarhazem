export default function validateHexColor(value: string): boolean {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  return hexRegex.test(value);
}
