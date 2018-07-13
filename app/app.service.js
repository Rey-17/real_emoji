"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var urlApi = 'https://www.script-labs.com/trabajos/emoji/public/api/';
var httpOptions = {
    headers: new http_2.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.applicationSettings = require("application-settings");
    }
    AppService.prototype.loginUser = function (data) {
        return this.http.post(urlApi + 'login', data);
    };
    AppService.prototype.getQuestionw = function () {
        var options = this.createRequestOptions();
        return this.http.get(urlApi + 'q_welcome', { headers: options });
    };
    // consultar el token desde el config
    AppService.prototype.createRequestOptions = function () {
        var headers = new http_2.HttpHeaders({
            "AuthToken": this.applicationSettings.getString('token'),
            "Content-Type": "application/json"
        });
        return headers;
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFFbEQsNkNBQW1EO0FBRW5ELElBQU0sTUFBTSxHQUFHLHdEQUF3RCxDQUFDO0FBRXhFLElBQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7UUFDdkIsY0FBYyxFQUFHLGtCQUFrQjtLQUNwQyxDQUFDO0NBQ0gsQ0FBQztBQUdGO0lBR0Usb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsd0JBQW1CLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFZCxDQUFDO0lBRXpDLDhCQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sTUFBTSxHQUFHLFdBQVcsRUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFFRCxxQ0FBcUM7SUFDN0IseUNBQW9CLEdBQTVCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN4RCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXJCWSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBSWUsaUJBQVU7T0FIekIsVUFBVSxDQXVCdEI7SUFBRCxpQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5jb25zdCB1cmxBcGkgPSAnaHR0cHM6Ly93d3cuc2NyaXB0LWxhYnMuY29tL3RyYWJham9zL2Vtb2ppL3B1YmxpYy9hcGkvJztcblxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbiAgfSlcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgYXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGxvZ2luVXNlcihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsQXBpICsgJ2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBnZXRRdWVzdGlvbncoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmxBcGkgKyAncV93ZWxjb21lJyx7IGhlYWRlcnM6IG9wdGlvbnMgfSlcbiAgfVxuXG4gIC8vIGNvbnN1bHRhciBlbCB0b2tlbiBkZXNkZSBlbCBjb25maWdcbiAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIFwiQXV0aFRva2VuXCI6IHRoaXMuYXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Rva2VuJyksXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSk7XG4gICAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbn1cbiJdfQ==