// function for calling the login api
const login = async (username, password) => {
  const response = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    console.log(response);
    alert(response.statusText);
  }
};

// function for handling login form submit
const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#loginUsername').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();

  if (username && password) {
    await login(username, password);
  }
};

// function for handling signup form
const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#firstName').value.trim();
  const last_name = document.querySelector('#lastName').value.trim();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (first_name && last_name && username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // login user upon successful signup
      await login(username, password);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);
document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);
