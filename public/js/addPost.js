async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const content = document.querySelector('input[name="content"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content": "application/json",
    },
  });

  // check for respone
  if (response.ok) {
    document.location.replace("/dashboard");
  } 
  else {
    alert(response.statusText);
  }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
