const LinksSocialMedia = {
  github: "bred97",
  youtube: "maykbrito",
  facebook: "brandon.camargo1",
  instagram: "brbarboza",
  twitter: "brandon1372"
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin = data.login
  })
}

getGitHubProfileInfos()