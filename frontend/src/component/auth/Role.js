export const IsAdmin = () => {
  if (localStorage.token) {
    if (currentUser().isAdmin !== true) {
      window.location = "/#/home";
    }
  } else {
    window.location = "/#/signin";
  }
};

export const IsUser = () => {
  if (localStorage.token) {
    if (currentUser().isAdmin === true) {
      window.location = "/#/dashboard";
    }
  } else {
    window.location = "/#/signin";
  }
};
