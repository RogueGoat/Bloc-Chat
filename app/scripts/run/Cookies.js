(function() {
    // this function uses cookies to remember things, right now we use it to remember a user's name
  function BlocChatCookies($cookies, $uibModal) {
      // this variable contains the cookies services and uses the get method to retreive information about the current user
    var currentUser = $cookies.get('blocChatCurrentUser');
      // if there is no current user, or the current user's name is empty, the modal is triggered through UserCtrl
    if (!currentUser || currentUser === '') {
      $uibModal.open({
          animation: true,
          templateUrl: 'templates/addUser.html',
          controller: 'UserCtrl'
          
      })
    }
  }
 // run instance injector
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();