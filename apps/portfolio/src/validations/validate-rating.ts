export default function validateRating(value: number): boolean {
  return value >= 1 && value <= 5;
}
