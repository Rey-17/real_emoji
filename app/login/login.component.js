"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhDQUE0QztBQUM1QyxzREFBNkQ7QUFDN0QsZ0NBQTZCO0FBQzdCLG9DQUFzQztBQVF0QztJQU1FLHdCQUFvQixNQUF3QixFQUFVLE9BQW1CLEVBQVUsSUFBVTtRQUF6RSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDdGLFVBQUssR0FBVyx3QkFBd0IsQ0FBQztRQUN6QyxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBRTVCLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRTJDLENBQUM7SUFFbEcsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzdDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUNILFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLENBQUM7SUE1QlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FPNEIseUJBQWdCLEVBQW1CLHdCQUFVLEVBQWdCLFdBQUk7T0FObEYsY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVtYWlsOiBzdHJpbmcgPSBcImFudG9uaW9zMTc4OUBnbWFpbC5jb21cIjtcbiAgcGFzc3dvcmQ6IHN0cmluZyA9IFwiMTIzNDU2XCI7XG4gIGRhdGEgOiBhbnk7XG4gIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgc2VydmljZTogQXBwU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmRhdGEgPSB7XCJlbWFpbFwiOiB0aGlzLmVtYWlsLCBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmR9O1xuICAgIGNvbnNvbGUuZGlyKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zZXJ2aWNlLmxvZ2luVXNlcih0aGlzLmRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5hcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygndG9rZW4nLHJlcy5kYXRhLmFwaV90b2tlbik7XG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xuICAgICAgY29uc29sZS5kaXIodGhpcy5hcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKSk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvd2VsY29tZVwiXSk7XG4gICAgfSxcbiAgZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgIGRpYWxvZ3MuYWxlcnQoZXJyb3IuZXJyb3IubWVzc2FnZSkudGhlbigoKT0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gIH0pO1xuICB9KVxuICAgIFxuICB9XG5cbn1cbiJdfQ==