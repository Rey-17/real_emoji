"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, page) {
        this.router = router;
        this.service = service;
        this.page = page;
        this.email = "antonios1789@gmail.com";
        this.password = "123456";
        this.applicationSettings = require("application-settings");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.data = { "email": this.email, "password": this.password };
        console.dir(this.data);
        this.service.loginUser(this.data).subscribe(function (res) {
            _this.applicationSettings.setString('token', res.data.api_token);
            console.dir(res);
            console.dir(_this.applicationSettings.getString('token'));
            _this.router.navigate(["/welcome"]);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, app_service_1.AppService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhDQUE0QztBQUM1QyxzREFBNkQ7QUFDN0QsZ0NBQTZCO0FBUTdCO0lBTUUsd0JBQW9CLE1BQXdCLEVBQVUsT0FBbUIsRUFBVSxJQUFVO1FBQXpFLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFMN0YsVUFBSyxHQUFXLHdCQUF3QixDQUFDO1FBQ3pDLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFFNUIsd0JBQW1CLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFMkMsQ0FBQztJQUVsRyxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUM3QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFDSCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBRUYsQ0FBQztJQXpCVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQU80Qix5QkFBZ0IsRUFBbUIsd0JBQVUsRUFBZ0IsV0FBSTtPQU5sRixjQUFjLENBMkIxQjtJQUFELHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW1haWw6IHN0cmluZyA9IFwiYW50b25pb3MxNzg5QGdtYWlsLmNvbVwiO1xuICBwYXNzd29yZDogc3RyaW5nID0gXCIxMjM0NTZcIjtcbiAgZGF0YSA6IGFueTtcbiAgYXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBzZXJ2aWNlOiBBcHBTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMuZGF0YSA9IHtcImVtYWlsXCI6IHRoaXMuZW1haWwsIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZH07XG4gICAgY29uc29sZS5kaXIodGhpcy5kYXRhKTtcbiAgICB0aGlzLnNlcnZpY2UubG9naW5Vc2VyKHRoaXMuZGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCd0b2tlbicscmVzLmRhdGEuYXBpX3Rva2VuKTtcbiAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG4gICAgICBjb25zb2xlLmRpcih0aGlzLmFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93ZWxjb21lXCJdKTtcbiAgICB9LFxuICBlcnJvciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9KVxuICAgIFxuICB9XG5cbn1cbiJdfQ==