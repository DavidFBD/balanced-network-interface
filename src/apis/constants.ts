export const API_V1_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://balanced.geometry.io/api/v1'
    : 'https://b.balanced.geometry.io/api/v1';