const submitForm = document.querySelector("#github-form");
const userList = document.querySelector("#user-list");
const reposList = document.querySelector("#repos_list");

//functions
listenForSubmit();

//listeners
function listenForSubmit() {
  submitForm.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const newUser = getUserInfoFromEvent(event);

  findUser(newUser);
}

function getUserInfoFromEvent(event) {
  const userInfo = event.target.children[0].value;
  return userInfo;
}

function findUser(newUser) {
  event.preventDefault();
  fetch(`https://api.github.com/search/users?q=${newUser}`)
    .then((response) => response.json())
    .then((users) => addUsersToContainer(users));
}

function addUsersToContainer(users) {
  users.items.forEach((user) => {
    appendUserInfo(user);
  });
}

function appendUserInfo(user) {
  // console.log(user.login);
  debugger;
  userList.innerHTML += `<li> <a href="${user.html_url}">
  <img src=${user.avatar_url}>
  ${user.login}</a></li>`;
}
