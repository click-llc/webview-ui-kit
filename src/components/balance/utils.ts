export function formatNumber(input: number | string): string {
  let num: number;

  if (typeof input === 'string') {
    const cleanedInput = input.replace(/\s/g, '');
    num = Number(cleanedInput);

    if (isNaN(num)) {
      console.error(`Invalid number: "${input}"`);
      num = 0;
    }
  } else {
    num = input;
  }

  return num.toLocaleString('ru-RU');
}

export function splitFormattedNumber(input: number | string): [string, string] {
  const numberToString = typeof input === 'string' ? input : input.toString();
  const parts = numberToString.split(/[.,]/);
  const intPart = parts[0].trim();
  const fracPart = parts[1]?.trim();

  return [intPart.trim(), fracPart.trim()];
}
