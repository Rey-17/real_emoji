"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(service) {
        this.service = service;
        this.applicationSettings = require("application-settings");
        this.q1 = 'test';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.loadQuestion();
    };
    WelcomeComponent.prototype.loadQuestion = function () {
        this.service.getQuestionw().subscribe(function (res) {
            console.dir(res);
        }, function (error) {
            console.dir(error);
        });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.scss']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBNEM7QUFTNUM7SUFJRSwwQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUh2Qyx3QkFBbUIsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0RCxPQUFFLEdBQVcsTUFBTSxDQUFDO0lBRXVCLENBQUM7SUFFNUMsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFFLFVBQUEsR0FBRztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQWhCVSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBTTZCLHdCQUFVO09BSjVCLGdCQUFnQixDQWtCNUI7SUFBRCx1QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC13ZWxjb21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbiAgcTE6IHN0cmluZyA9ICd0ZXN0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFwcFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLmxvYWRRdWVzdGlvbigpO1xuICB9XG5cbiAgbG9hZFF1ZXN0aW9uKCkge1xuICAgIHRoaXMuc2VydmljZS5nZXRRdWVzdGlvbncoKS5zdWJzY3JpYmUoIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==