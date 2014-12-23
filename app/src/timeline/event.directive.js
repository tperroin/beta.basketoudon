/**
 * Element <event></event>
 */
angular.module('app').directive('event', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '' +
        '<div class="cd-timeline-block">' +
            '<div class="cd-timeline-img cd-picture">' +
                '<img src="{{eventelem.image}}">' +
            '</div>' +

            '<div class="cd-timeline-content">' +
                '<h2>{{eventelem.title}}</h2>' +
                '<p>{{eventelem.content}}</p>' +
                '<span class="cd-date">{{eventelem.date_at | date: "dd/MMM/yyyy" }}</span>' +
            '</div>' +
        '</div>',
        scope: {
            eventelem: "="
        }
    };
});
