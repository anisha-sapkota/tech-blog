const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch('/api/post', {
      method: 'post',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('Successfully added post');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#newPostBtn').addEventListener('click', newPostHandler);
