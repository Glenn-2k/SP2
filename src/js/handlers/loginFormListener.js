import { login } from '../api/auth/login';

export function loginFormListener() {
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      console.log('Form data:', profile);

      if (profile.email && profile.password) {
        const user = await login(profile);
        console.log('Login user:', user);

        if (user) {
          window.location.reload();
        } else {
          console.error('Login failed: Invalid credentials or server error');
          alert('Invalid email or password. Please try again.');
        }
      } else {
        console.error('Email or password is missing');
        alert('Please enter both your email and password.');
      }
    });
  } else {
    console.error('Login form not found');
  }
}
