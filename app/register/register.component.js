"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var loader = new nativescript_loading_indicator_1.LoadingIndicator();
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.applicationSettings = require("application-settings");
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        loader.show();
        var data = { name: this.nombre, email: this.email, password: this.password, password_confirmation: this.password };
        console.log(this.email + ' ' + this.nombre + ' ' + this.password);
        this.service.register(data).subscribe(function (res) {
            loader.hide();
            console.dir(res);
            _this.applicationSettings.setString('token', res.data.api_token);
            dialogs.alert('Te has registrado satisfactoriamente.').then(function () {
                _this.router.navigate(["/introduction"]);
            });
        }, function (error) {
            loader.hide();
            console.dir(error);
            dialogs.alert(error.error.message).then(function () {
                console.log("Dialog closed!");
            });
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, app_service_1.AppService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhDQUE0QztBQUM1QyxzREFBK0Q7QUFFL0Qsb0NBQXNDO0FBQ3RDLGlGQUFnRTtBQUVoRSxJQUFJLE1BQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7QUFRcEM7SUFPRSwyQkFBb0IsTUFBd0IsRUFBVSxPQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGekUsd0JBQW1CLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFHdEQsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsa0NBQU0sR0FBTjtRQUFBLGlCQWtCQztRQWpCQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxJQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQztRQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvRCxPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QlUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQVE0Qix5QkFBZ0IsRUFBbUIsd0JBQVU7T0FQOUQsaUJBQWlCLENBZ0M3QjtJQUFELHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcblxudmFyIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbm9tYnJlOiBTdHJpbmc7XG4gIHB1YmxpYyBlbWFpbDogU3RyaW5nO1xuICBwdWJsaWMgcGFzc3dvcmQ6IFN0cmluZztcblxuICBhcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHNlcnZpY2U6IEFwcFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgc3VibWl0KCkge1xuICAgIGxvYWRlci5zaG93KCk7XG4gICAgY29uc3QgZGF0YSA9IHsgbmFtZTogdGhpcy5ub21icmUsIGVtYWlsOiB0aGlzLmVtYWlsLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgcGFzc3dvcmRfY29uZmlybWF0aW9uOiB0aGlzLnBhc3N3b3JkfTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVtYWlsICsgJyAnICsgdGhpcy5ub21icmUgKyAnICcgKyB0aGlzLnBhc3N3b3JkKTtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXIoZGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsb2FkZXIuaGlkZSgpO1xuICAgICAgY29uc29sZS5kaXIocmVzKTtcbiAgICAgIHRoaXMuYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ3Rva2VuJyxyZXMuZGF0YS5hcGlfdG9rZW4pO1xuICAgICAgZGlhbG9ncy5hbGVydCgnVGUgaGFzIHJlZ2lzdHJhZG8gc2F0aXNmYWN0b3JpYW1lbnRlLicpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW50cm9kdWN0aW9uXCJdKTtcbiAgICAgIH0pO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGxvYWRlci5oaWRlKCk7XG4gICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICBkaWFsb2dzLmFsZXJ0KGVycm9yLmVycm9yLm1lc3NhZ2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19