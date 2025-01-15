import CryptoJS from 'crypto-js'; // Ensure you have installed this package for encryption

export function get(url, apiKey, body = null) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const headers = new Headers({
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      });

      let encryptedBody = null;

      // Encrypt the body if provided
      if (body) {
        const secretKey = 'your-encryption-key'; // Replace with your secret key
        encryptedBody = CryptoJS.AES.encrypt(JSON.stringify(body), secretKey).toString();
      }

      fetch(url, {
        method: body ? 'POST' : 'GET', // Use POST if a body is present
        headers: headers,
        body: encryptedBody ? JSON.stringify({ encryptedData: encryptedBody }) : null,
      })
        .then((response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject(new Error(`Error al obtener datos de ${url}: ${response.statusText}`));
          }
        })
        .catch((error) => reject(error));
    }, 1000); // Simulación de latencia de red
  });
}

