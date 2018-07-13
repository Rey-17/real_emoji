"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(service) {
        this.service = service;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw4Q0FBNEM7QUFTNUM7SUFNRSwwQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUx2Qyx3QkFBbUIsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUV0RCxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBa0IsRUFBRSxDQUFDO0lBRWtCLENBQUM7SUFFNUMsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQSxHQUFHO1lBQ3hDLEtBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sb0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFsQ1UsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQVE2Qix3QkFBVTtPQU41QixnQkFBZ0IsQ0FvQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtd2VsY29tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2VsY29tZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFwcGxpY2F0aW9uU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG4gIHExOiBzdHJpbmc7XG4gIHFvcHRpb25zOiBhbnkgPSBbXTtcbiAgcW9wdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQXBwU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMubG9hZFF1ZXN0aW9uKCk7XG4gIH1cblxuICBsb2FkUXVlc3Rpb24oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmdldFF1ZXN0aW9udygpLnN1YnNjcmliZSggcmVzID0+IHtcbiAgICAgIHRoaXMucTEgPSByZXNbMF0ucHJlZ3VudGE7XG4gICAgICB0aGlzLnFvcHRpb25zID0gcmVzWzBdLm9wdGlvbnNfcXVlc3Rpb25zO1xuICAgICAgY29uc29sZS5kaXIodGhpcy5xb3B0aW9ucyk7XG4gICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnFvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnFvcHQucHVzaCh0aGlzLnFvcHRpb25zW2ldLm9wdGlvbik7XG4gICAgfVxuICAgIGNvbnNvbGUuZGlyKHRoaXMucW9wdCk7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgbGV0IGlkID0gYXJncy5pbmRleCArIDE7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICB9XG5cbn1cbiJdfQ==