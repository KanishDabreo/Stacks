export const getUser = () => {
  let user = localStorage.getItem('userSession');

  if (user) {
    user = JSON.parse(user);
  }
  return user;
}