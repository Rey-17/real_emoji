"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_service_1 = require("../app.service");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(service, router) {
        this.service = service;
        this.router = router;
        this.applicationSettings = require("application-settings");
        this.qoptions = [];
        this.qopt = [];
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.loadQuestion();
    };
    WelcomeComponent.prototype.loadQuestion = function () {
        var _this = this;
        this.service.getQuestionw().subscribe(function (res) {
            _this.q1 = res[0].pregunta;
            _this.qoptions = res[0].options_questions;
            console.dir(_this.qoptions);
            _this.createList();
        }, function (error) {
            console.dir(error);
        });
    };
    WelcomeComponent.prototype.createList = function () {
        for (var i = 0; i < this.qoptions.length; i++) {
            this.qopt.push(this.qoptions[i].option);
        }
        console.dir(this.qopt);
    };
    WelcomeComponent.prototype.onItemTap = function (args) {
        var id = args.index + 1;
        var op = this.qopt[args.index];
        var extras = {
            queryParams: {
                'id': id,
                'option': op
            }
        };
        this.router.navigate(["/introduction2"], extras);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.scss']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.RouterExtensions])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBNkQ7QUFHN0QsOENBQTRDO0FBUzVDO0lBTUUsMEJBQW9CLE9BQW1CLEVBQVUsTUFBd0I7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTHpFLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXRELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFrQixFQUFFLENBQUM7SUFFb0QsQ0FBQztJQUU5RSxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFBLEdBQUc7WUFDeEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFxQjtZQUM3QixXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFHLEVBQUU7Z0JBQ1QsUUFBUSxFQUFHLEVBQUU7YUFDZDtTQUNGLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXhDVSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBUTZCLHdCQUFVLEVBQWtCLHlCQUFnQjtPQU45RCxnQkFBZ0IsQ0EwQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uL2FwcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXdlbGNvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2VsY29tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dlbGNvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuICBxMTogc3RyaW5nO1xuICBxb3B0aW9uczogYW55ID0gW107XG4gIHFvcHQ6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFwcFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5sb2FkUXVlc3Rpb24oKTtcbiAgfVxuXG4gIGxvYWRRdWVzdGlvbigpIHtcbiAgICB0aGlzLnNlcnZpY2UuZ2V0UXVlc3Rpb253KCkuc3Vic2NyaWJlKCByZXMgPT4ge1xuICAgICAgdGhpcy5xMSA9IHJlc1swXS5wcmVndW50YTtcbiAgICAgIHRoaXMucW9wdGlvbnMgPSByZXNbMF0ub3B0aW9uc19xdWVzdGlvbnM7XG4gICAgICBjb25zb2xlLmRpcih0aGlzLnFvcHRpb25zKTtcbiAgICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTGlzdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucW9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucW9wdC5wdXNoKHRoaXMucW9wdGlvbnNbaV0ub3B0aW9uKTtcbiAgICB9XG4gICAgY29uc29sZS5kaXIodGhpcy5xb3B0KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIGxldCBpZCA9IGFyZ3MuaW5kZXggKyAxO1xuICAgIGxldCBvcCA9IHRoaXMucW9wdFthcmdzLmluZGV4XTtcbiAgICBsZXQgZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgJ2lkJyA6IGlkLFxuICAgICAgICAnb3B0aW9uJyA6IG9wXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbnRyb2R1Y3Rpb24yXCJdLCBleHRyYXMpO1xuICB9XG5cbn1cbiJdfQ==