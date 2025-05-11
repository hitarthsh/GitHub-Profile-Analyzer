function fetchProfile() {
  const username = document.getElementById("username").value.trim();
  if (username === "") return alert("Please enter a username.");
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") return alert("User not found.");
      const profileDiv = document.getElementById("profile");
      profileDiv.innerHTML = `
                    <img src="${data.avatar_url}" alt="${data.login}'s avatar">
                    <h2>${data.name || data.login}</h2>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                    <p>Public Repos: ${data.public_repos}</p>
                    <a href="${data.html_url}" target="_blank">Visit Profile</a>
                `;
      console.log(data);
    })
    .catch((error) => alert("Error fetching profile. Please try again."));
}
