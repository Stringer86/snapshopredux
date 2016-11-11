class SignUpService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
}

  signUp(firstName, lastName, email, password) {
      return this.$http.post('/api/users', { firstName, lastName, email, password })
        .then((response) => {
        Materialize.toast(`You are now signed up, ${firstName}!`, 4000, 'blue rounded');
        this.$state.go('signin')
        return response.data;
        })
        .catch((err) => {
          Materialize.toast(`${err.data}`, 4000, 'red rounded');
        })
    }
}

SignUpService.$inject = ['$http', '$state'];

export default SignUpService;
