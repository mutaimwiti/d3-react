class Auth {
  login(cb) {
    localStorage.setItem('auth', JSON.stringify(true));
    cb();
  }

  logout(cb) {
    localStorage.setItem('auth', JSON.stringify(false));
    cb();
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem('auth')) === true;
  }
}

export default new Auth();
