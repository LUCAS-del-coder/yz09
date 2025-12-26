export function getBaseUrl() {
  // 生產環境：優先使用環境變數，如果沒有則使用實際域名
  if (process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_BASE_URL || 'https://yz09.com';
  }

  // Preview 環境：使用 Vercel URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 開發環境：使用環境變數或 localhost
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}


