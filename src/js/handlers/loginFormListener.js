import { login } from '../api/auth/login';

export function loginFormListener() {
  const form = document.getElementById('loginForm');

  console.log(form);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    if (profile) {
      try {
        const user = await login(profile);
        console.log('User logged in:', user);
      } catch (error) {
        console.error('Login failed', error);
      }
    } else {
      console.error('Email or password is missing');
    }
  });
}
