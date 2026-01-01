import { initializeSslPinning } from "react-native-ssl-public-key-pinning";

export async function setupSslPinning() {
    try {
      await initializeSslPinning({
        "qa-server.bublly.com": {
          includeSubdomains: false,
          publicKeyHashes: [
            // Primary key
            "abcdefghijklmnopqrst// Dummy key please remove this add real one , NOTE : YOU HAVE TO ADD 2 KEYS ATLEAST
  
            // 🔴 REQUIRED on iOS — ask DevOps for backup key
            // "BACKUP_PUBLIC_KEY_HASH_HERE"
          ],
        },
      });
    } catch (error) {
        console.error('Error initializing SSL pinning:', error);
    }
  }