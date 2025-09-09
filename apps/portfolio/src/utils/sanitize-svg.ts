export default function sanitizeSvg(icon: string): string {
  return icon.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
}
