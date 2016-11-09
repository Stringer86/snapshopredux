class SignInService {
  constructor($http) {
    this.$http = $http;

}

  signIn(email, password) {
      return this.$http.post('/api/token', { email, password })
        .then((response) => {
        Materialize.toast('Signed in!', 4000, 'blue rounded');
        return response.data;
        })
        .catch((err) => {
          console.log(err);
        })
    }
}

export default SignInService;
