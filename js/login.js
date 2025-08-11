import { getValidationError } from './utils/validation.js';
import { saveAuthData } from './utils/storage.js';
import { isAuthenticated } from './utils/auth.js';

// Initialize Lucide icons
lucide.createIcons();

// Redirect to dashboard if already authenticated
if (isAuthenticated()) {
  window.location.href = '/index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  const togglePasswordBtn = document.querySelector('.toggle-password');
  const passwordInput = document.getElementById('password');
  const showPasswordIcon = document.querySelector('.show-password');
  const hidePasswordIcon = document.querySelector('.hide-password');

  // Toggle password visibility
  togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    showPasswordIcon.classList.toggle('hidden');
    hidePasswordIcon.classList.toggle('hidden');
  });

  // Handle form submission
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;
    const remember = loginForm.remember.checked;

    // Validate input
    const error = getValidationError(email, password);
    if (error) {
      errorMessage.textContent = error;
      return;
    }

    try {
      // Here you would typically make an API call to authenticate
      // For demo purposes, we'll simulate a successful login
      const mockResponse = {
        user: {
          email,
          name: 'John Doe',
        },
        token: 'mock-jwt-token'
      };

      // Save auth data if remember me is checked
      if (remember) {
        saveAuthData(mockResponse);
      }

      // Redirect to dashboard
      window.location.href = '/index.html';
    } catch (error) {
      errorMessage.textContent = 'Invalid email or password';
    }
  });
});