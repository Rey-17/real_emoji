"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
//var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var loader = new nativescript_loading_indicator_1.LoadingIndicator();
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, page) {
        this.router = router;
        this.service = service;
        this.page = page;
        this.applicationSettings = require("application-settings");
        this.loading = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loading = false;
        loader.show();
        this.data = { "email": this.email, "password": this.password };
        console.dir(this.data);
        this.service.loginUser(this.data).subscribe(function (res) {
            _this.applicationSettings.setString('token', res.data.api_token);
            _this.applicationSettings.setNumber('id_user', res.data.id);
            console.dir(res);
            console.dir(_this.applicationSettings.getString('token'));
            loader.hide();
            _this.router.navigate(["/introduction"], { clearHistory: true });
            _this.loading = true;
        }, function (error) {
            loader.hide();
            _this.loading = true;
            console.log(error.error.message);
            dialogs.alert(error.error.message).then(function () {
                console.log("Dialog closed!");
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhDQUE0QztBQUM1QyxzREFBNkQ7QUFDN0QsZ0NBQTZCO0FBQzdCLG9DQUFzQztBQUN0QyxpRkFBZ0U7QUFFaEUsb0ZBQW9GO0FBRXBGLElBQUksTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztBQVFwQztJQU9FLHdCQUFvQixNQUF3QixFQUFVLE9BQW1CLEVBQVUsSUFBVTtRQUF6RSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDdGLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQy9DLFlBQU8sR0FBYyxJQUFJLENBQUM7SUFFZ0UsQ0FBQztJQUVsRyxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzdDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQ0gsVUFBQSxLQUFLO1lBQ0gsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsQ0FBQztJQXBDVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQVE0Qix5QkFBZ0IsRUFBbUIsd0JBQVUsRUFBZ0IsV0FBSTtPQVBsRixjQUFjLENBc0MxQjtJQUFELHFCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5cbi8vdmFyIExvYWRpbmdJbmRpY2F0b3IgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCIpLkxvYWRpbmdJbmRpY2F0b3I7XG5cbnZhciBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW1haWw6IHN0cmluZyA7Ly9cImFudG9uaW9zMTc4OUBnbWFpbC5jb21cIjtcbiAgcGFzc3dvcmQ6IHN0cmluZzsgLy8gXCIxMjM0NTZcIjtcbiAgZGF0YSA6IGFueTtcbiAgYXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gICA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgc2VydmljZTogQXBwU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBsb2FkZXIuc2hvdygpO1xuICAgIHRoaXMuZGF0YSA9IHtcImVtYWlsXCI6IHRoaXMuZW1haWwsIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZH07XG4gICAgY29uc29sZS5kaXIodGhpcy5kYXRhKTtcbiAgICB0aGlzLnNlcnZpY2UubG9naW5Vc2VyKHRoaXMuZGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCd0b2tlbicscmVzLmRhdGEuYXBpX3Rva2VuKTtcbiAgICAgIHRoaXMuYXBwbGljYXRpb25TZXR0aW5ncy5zZXROdW1iZXIoJ2lkX3VzZXInLCByZXMuZGF0YS5pZCk7XG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xuICAgICAgY29uc29sZS5kaXIodGhpcy5hcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKSk7XG4gICAgICBsb2FkZXIuaGlkZSgpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2ludHJvZHVjdGlvblwiXSx7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgfSxcbiAgZXJyb3IgPT4ge1xuICAgIGxvYWRlci5oaWRlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICBkaWFsb2dzLmFsZXJ0KGVycm9yLmVycm9yLm1lc3NhZ2UpLnRoZW4oKCk9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICB9KTtcbiAgfSlcbiAgICBcbiAgfVxuXG59XG4iXX0=