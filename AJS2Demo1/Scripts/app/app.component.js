(function(app) {
  app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        templateUrl: '/Scripts/app/app.component.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));