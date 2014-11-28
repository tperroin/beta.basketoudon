/**
 * Created by Thibault on 28/11/2014.
 */
function UserModel() {
    this.id = '';
    this.username = '';
    this.email = '';
    this.enabled = '';
    this.last_login = '';
    this.roles = '';
    this.firstname = '';
    this.lastname = '';
}

angular
    .module('app')
    .service('UserModel', UserModel);