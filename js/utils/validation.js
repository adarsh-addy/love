export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  return password.length >= 8;
}

export function getValidationError(email, password) {
  if (!email) return 'Email is required';
  if (!validateEmail(email)) return 'Please enter a valid email address';
  if (!password) return 'Password is required';
  if (!validatePassword(password)) return 'Password must be at least 8 characters';
  return null;
}