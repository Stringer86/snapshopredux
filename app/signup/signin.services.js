class SignInService {
  constructor($http) {
    this.$http = $http;
    this.sign = true;
    this.isLoggedIn = false;
    this.$http.get('/api/token')
      .then((response) => {
        this.isLoggedIn = response.data;
      })
      .catch((err) => {
        console.log(err);
      })
}

  getState() {
    return this.isLoggedIn;
  }

  signIn(email, password) {
      return this.$http.post('/api/token', { email, password })
        .then((response) => {
        Materialize.toast('Signed in!', 4000, 'green rounded');
        this.isLoggedIn = true;
        return response.data;
        })
        .catch((err) => {
          Materialize.toast('Signed in failed!', 4000, 'red rounded');
        })
    }

    signOut() {
        return this.$http.delete('/api/token')
          .then((response) => {
            Materialize.toast('successfully logged out', 4000, 'red rounded');
            this.isLoggedIn = false;
          return response.data;
          })
          .catch((err) => {
            console.log(err);
          })
      }
}

export default SignInService;
