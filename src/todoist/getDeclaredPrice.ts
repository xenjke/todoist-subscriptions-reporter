export function getDeclaredPrice(description: string): number {
  const justNumbers = description
    .replace(',', '.')
    .match(/[-+]?[0-9]*\.?[0-9]+/);
  if (!justNumbers || justNumbers.length > 1) {
    console.error(`Failed to parse ${description} as a price`);
    throw `Price parsing error`;
  }
  return parseFloat(justNumbers[0]);
}
