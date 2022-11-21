// function for updating post
const updatePostHandler = async (event) => {
  event.preventDefault();

  const postId = event.target.getAttribute('data-post-id');
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'put',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('Successfully updated post');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// function for deleting post
const deletePostHandler = async (event) => {
  event.preventDefault();

  const postId = event.target.getAttribute('data-post-id');

  if (postId) {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('Successfully deleted post');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#updatePostBtn')
  .addEventListener('click', updatePostHandler);

document
  .querySelector('#deletePostBtn')
  .addEventListener('click', deletePostHandler);
