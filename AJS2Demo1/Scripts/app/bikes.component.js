(function (app) {
    app.BikesComponent =
        ng.core.Component({
            selector: 'bikes',
            Providers: [ng.http.HTTP_PROVIDERS],
            templateUrl: '/Scripts/app/bikes.component.html'
        })
            .Class({
                constructor: [ng.http.Http, function (http) {
                    this.http = http;

                    this.m_Model =
                        {
                            "Bikes": []
                        };

                    this.mapBikes().subscribe(function (result) {
                        this.m_Model = result;
                    }.bind(this));
                }],
                mapBikes: function () {
                    return this.http.get('home/GetBikes').map(function (res) {
                        return res.json();
                    });
                },
                AddBike: function () {
                    this.m_Model.Bikes.push({
                        "Name": "",
                        "Price": "0.00",
                        "Quantity": 0
                    });
                },
                DeleteBike: function (Bike) {
                    var i = this.m_Model.Bikes.indexOf(Bike);
                    this.m_Model.Bikes.splice(i, 1);
                },
                Save: function () {                   
                    this.http.post('home/Save', this.m_Model, new Headers({ 'Content-Type': 'application/json' })).subscribe();
                }
            });
})(window.app || (window.app = {}));

