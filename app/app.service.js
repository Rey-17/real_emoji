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
    AppService.prototype.register = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(urlApi + 'register', data, { headers: options });
    };
    // consultar el token desde el config
    AppService.prototype.createRequestOptions = function () {
        var headers = new http_2.HttpHeaders({
            "Authorization": "Bearer " + this.applicationSettings.getString('token'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFFbEQsNkNBQW1EO0FBRW5ELElBQU0sTUFBTSxHQUFHLHdEQUF3RCxDQUFDO0FBRXhFLElBQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7UUFDdkIsY0FBYyxFQUFHLGtCQUFrQjtLQUNwQyxDQUFDO0NBQ0gsQ0FBQztBQUdGO0lBR0Usb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsd0JBQW1CLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFZCxDQUFDO0lBRXpDLDhCQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sTUFBTSxHQUFHLFdBQVcsRUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxNQUFNLEdBQUcsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCxxQ0FBcUM7SUFDN0IseUNBQW9CLEdBQTVCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDeEUsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUExQlksVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUllLGlCQUFVO09BSHpCLFVBQVUsQ0E0QnRCO0lBQUQsaUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuY29uc3QgdXJsQXBpID0gJ2h0dHBzOi8vd3d3LnNjcmlwdC1sYWJzLmNvbS90cmFiYWpvcy9lbW9qaS9wdWJsaWMvYXBpLyc7XG5cbmNvbnN0IGh0dHBPcHRpb25zID0ge1xuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0pXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBsb2dpblVzZXIoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybEFwaSArICdsb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb253KCkge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsQXBpICsgJ3Ffd2VsY29tZScseyBoZWFkZXJzOiBvcHRpb25zIH0pXG4gIH1cblxuICByZWdpc3RlcihkYXRhKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsQXBpICsgJ3JlZ2lzdGVyJywgZGF0YSwge2hlYWRlcnM6IG9wdGlvbnN9KVxuICB9XG5cbiAgLy8gY29uc3VsdGFyIGVsIHRva2VuIGRlc2RlIGVsIGNvbmZpZ1xuICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgdGhpcy5hcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKSxcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9KTtcbiAgICByZXR1cm4gaGVhZGVycztcbn1cblxufVxuIl19