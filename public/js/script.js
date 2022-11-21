// function for calling the logout api
const logout = async () => {
  const response = await fetch('/api/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

const init = () => {
  const logoutBtnEl = document.querySelector('#logoutBtn');
  if (logoutBtnEl) {
    logoutBtnEl.addEventListener('click', logout);
  }
};

init();
