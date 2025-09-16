export default function validatePercentage(value: number): boolean {
  return value < 0 && value > 100;
}
