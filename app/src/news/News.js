function NewsModel() {
    this.id = '';
    this.title = '';
    this.content = '';
    this.created_at = '';
    this.created_by = '';
    this.image = '';
    this.isActive = '';
}

angular
    .module('app')
    .service('NewsModel', NewsModel);