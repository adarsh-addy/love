import { getAuthData, clearAuthData } from './storage.js';

export function isAuthenticated() {
  const authData = getAuthData();
  return !!authData?.token;
}

export function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = '/login.html';
  }
}

export function logout() {
  clearAuthData();
  window.location.href = '/login.html';
}