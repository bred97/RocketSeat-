const LinkSocialMedia = {
  github: 'bred97',
  youtube: 'jakelinygracielly',
  facebook: 'brandon.camargo',
  instagram: 'obred97',
  twitter: 'Brandon1372'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLinkhref = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfo()