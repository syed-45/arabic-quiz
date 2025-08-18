export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateRandomOption<T>(options: T[]): T {
    return options[generateRandomNumber(0, options.length - 1)];
}

export function generateRandomPasscode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const array = new Uint32Array(6); // store random integers
  crypto.getRandomValues(array); // fill array with secure random numbers
  
  let passcode = '';
  for (let i = 0; i < array.length; i++) {
    passcode += chars[array[i] % chars.length]; // map to character set
  }
  
  return passcode;
}
