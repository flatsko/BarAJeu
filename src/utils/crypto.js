export async function hash(token) {
  const compatibleCrypto = getCrypto();

  const data = new TextEncoder().encode(token);
  const byteHash = await compatibleCrypto.subtle.digest("SHA-256", data);

  const arrayHash = Array.from(new Uint8Array(byteHash));
  const hexHash = arrayHash
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toLocaleUpperCase();

  return hexHash;
}

function getCrypto() {
  try {
    return window.crypto;
  } catch {
    return crypto;
  }
}
