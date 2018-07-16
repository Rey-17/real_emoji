"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var router_1 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.applicationSettings = require("application-settings");
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var data = { name: this.nombre, email: this.email, password: this.password, password_confirmation: this.password };
        console.log(this.email + ' ' + this.nombre + ' ' + this.password);
        this.service.register(data).subscribe(function (res) {
            console.dir(res);
            _this.applicationSettings.setString('token', res.data.api_token);
            dialogs.alert('Te has registrado satisfactoriamente.').then(function () {
                _this.router.navigate(["/introduction"]);
            });
        }, function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhDQUE0QztBQUM1QyxzREFBK0Q7QUFFL0Qsb0NBQXNDO0FBUXRDO0lBT0UsMkJBQW9CLE1BQXdCLEVBQVUsT0FBbUI7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnpFLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBR3RELENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLGtDQUFNLEdBQU47UUFBQSxpQkFlQztRQWRDLElBQU0sSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQ3BILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBUTRCLHlCQUFnQixFQUFtQix3QkFBVTtPQVA5RCxpQkFBaUIsQ0E2QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBub21icmU6IFN0cmluZztcbiAgcHVibGljIGVtYWlsOiBTdHJpbmc7XG4gIHB1YmxpYyBwYXNzd29yZDogU3RyaW5nO1xuXG4gIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgc2VydmljZTogQXBwU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHsgbmFtZTogdGhpcy5ub21icmUsIGVtYWlsOiB0aGlzLmVtYWlsLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgcGFzc3dvcmRfY29uZmlybWF0aW9uOiB0aGlzLnBhc3N3b3JkfTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVtYWlsICsgJyAnICsgdGhpcy5ub21icmUgKyAnICcgKyB0aGlzLnBhc3N3b3JkKTtcbiAgICB0aGlzLnNlcnZpY2UucmVnaXN0ZXIoZGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xuICAgICAgdGhpcy5hcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygndG9rZW4nLHJlcy5kYXRhLmFwaV90b2tlbik7XG4gICAgICBkaWFsb2dzLmFsZXJ0KCdUZSBoYXMgcmVnaXN0cmFkbyBzYXRpc2ZhY3RvcmlhbWVudGUuJykudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbnRyb2R1Y3Rpb25cIl0pO1xuICAgICAgfSk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgZGlhbG9ncy5hbGVydChlcnJvci5lcnJvci5tZXNzYWdlKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==