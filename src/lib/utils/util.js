export function firstStringToUpper(string) {
  return string
    .split(' ')
    .map(value => value.slice(0, 1).toUpperCase() + value.slice(1))
    .join(' ');
}
