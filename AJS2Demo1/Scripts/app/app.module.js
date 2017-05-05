(function (app) {
    app.AppModule =
      ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule, ng.http.HttpModule],
          declarations: [app.AppComponent, app.BikesComponent],
          bootstrap: [app.AppComponent]
      })
      .Class({
          constructor: function () { }
      });
})(window.app || (window.app = {}));