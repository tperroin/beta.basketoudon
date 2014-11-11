/**
 * Created by Thibault on 04/11/2014.
 */
function UserService($rootScope) {

    return {
        User: User,
        getUserName: getUserName,
        getEmail: getEmail,
        getRoles: getRoles,
        isAdmin: isAdmin,
        isConnected: isConnected
    }

    function User($user) {
        this.username = $user.username;
        this.email = $user.email;
        this.roles = $user.roles;

        return this;
    }

    function getUserName() {
        return username;
    };

    function  getEmail() {
        return email;
    };

    function getRoles() {
        return roles;
    };

    function  isAdmin() {
        var retour = -1;
        if($rootScope.connectedUser) {
            retour = $rootScope.connectedUser.roles.indexOf('ROLE_SUPER_ADMIN');
        }
        if(retour != -1) {
            return true
        }else{
            return false;
        }
    };

    function isConnected() {
        if($rootScope.connectedUser) {
            return $rootScope.connectedUser.connected;
        }
    };

}


angular
    .module('app')
    .factory('UserService', UserService);