class SignUpService {
  constructor($http) {
    this.$http = $http;
}

  signUp(firstName, lastName, email, password) {
      return this.$http.post('/api/users', { firstName, lastName, email, password })
        .then((response) => {
        Materialize.toast(`You are now signed up, ${firstName}!`, 4000, 'blue rounded');
        return response.data;
        })
        .catch((err) => {
          console.log(err);
        })
    }
}

export default SignUpService;
