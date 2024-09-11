import { register } from '../api/auth/register';

export function registerFormListener() {
  const form = document.getElementById('registrationForm');

  console.log(form);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    // sending the profile object to the register function
    register(profile);
  });
}
