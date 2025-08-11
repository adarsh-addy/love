const STORAGE_KEY = 'bankdash_auth';

export function saveAuthData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getAuthData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export function clearAuthData() {
  localStorage.removeItem(STORAGE_KEY);
}