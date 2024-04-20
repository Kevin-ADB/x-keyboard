export const base64ToArrayBuffer = (base64: string) => {
  const binString = atob(base64);
  const array = Uint8Array.from(binString, (char) => char.codePointAt(0));

  return array.buffer;
};
