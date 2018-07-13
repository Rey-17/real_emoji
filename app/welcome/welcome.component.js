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
        console.log("Item Tapped at cell index: " + args.index);
        var id = args.index + 1;
        console.log(id);
        this.router.navigate(["/questions"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBNkQ7QUFFN0QsOENBQTRDO0FBUzVDO0lBTUUsMEJBQW9CLE9BQW1CLEVBQVUsTUFBd0I7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTHpFLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXRELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFrQixFQUFFLENBQUM7SUFFb0QsQ0FBQztJQUU5RSxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFBLEdBQUc7WUFDeEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFuQ1UsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQVE2Qix3QkFBVSxFQUFrQix5QkFBZ0I7T0FOOUQsZ0JBQWdCLENBcUM1QjtJQUFELHVCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtd2VsY29tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2VsY29tZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG4gIHExOiBzdHJpbmc7XG4gIHFvcHRpb25zOiBhbnkgPSBbXTtcbiAgcW9wdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQXBwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLmxvYWRRdWVzdGlvbigpO1xuICB9XG5cbiAgbG9hZFF1ZXN0aW9uKCkge1xuICAgIHRoaXMuc2VydmljZS5nZXRRdWVzdGlvbncoKS5zdWJzY3JpYmUoIHJlcyA9PiB7XG4gICAgICB0aGlzLnExID0gcmVzWzBdLnByZWd1bnRhO1xuICAgICAgdGhpcy5xb3B0aW9ucyA9IHJlc1swXS5vcHRpb25zX3F1ZXN0aW9ucztcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMucW9wdGlvbnMpO1xuICAgICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGVMaXN0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5xb3B0LnB1c2godGhpcy5xb3B0aW9uc1tpXS5vcHRpb24pO1xuICAgIH1cbiAgICBjb25zb2xlLmRpcih0aGlzLnFvcHQpO1xuICB9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xuICAgIGxldCBpZCA9IGFyZ3MuaW5kZXggKyAxO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcXVlc3Rpb25zXCJdKTtcbiAgfVxuXG59XG4iXX0=