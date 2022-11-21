// function for adding comment
const commentFormHandler = async (event) => {
  event.preventDefault();

  const postEl = document.querySelectorAll('div[data-post-id]')[0];
  const post_id = postEl.getAttribute('data-post-id');
  const content = document.querySelector('#commentTextarea').value.trim();

  if (post_id && content) {
    const response = await fetch('/api/comment', {
      method: 'post',
      body: JSON.stringify({
        post_id,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#commentBtn')
  .addEventListener('click', commentFormHandler);
