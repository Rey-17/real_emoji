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
        var id = args.index + 1;
        var op = this.qopt[args.index];
        var extras = {
            queryParams: {
                'id': id,
                'option': op
            }
        };
        this.router.navigate(["/questions"], extras);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBNkQ7QUFHN0QsOENBQTRDO0FBUzVDO0lBTUUsMEJBQW9CLE9BQW1CLEVBQVUsTUFBd0I7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTHpFLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXRELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFrQixFQUFFLENBQUM7SUFFb0QsQ0FBQztJQUU5RSxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFBLEdBQUc7WUFDeEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFxQjtZQUM3QixXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFHLEVBQUU7Z0JBQ1QsUUFBUSxFQUFHLEVBQUU7YUFDZDtTQUNGLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF4Q1UsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQVE2Qix3QkFBVSxFQUFrQix5QkFBZ0I7T0FOOUQsZ0JBQWdCLENBMEM1QjtJQUFELHVCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC13ZWxjb21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbiAgcTE6IHN0cmluZztcbiAgcW9wdGlvbnM6IGFueSA9IFtdO1xuICBxb3B0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBcHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMubG9hZFF1ZXN0aW9uKCk7XG4gIH1cblxuICBsb2FkUXVlc3Rpb24oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmdldFF1ZXN0aW9udygpLnN1YnNjcmliZSggcmVzID0+IHtcbiAgICAgIHRoaXMucTEgPSByZXNbMF0ucHJlZ3VudGE7XG4gICAgICB0aGlzLnFvcHRpb25zID0gcmVzWzBdLm9wdGlvbnNfcXVlc3Rpb25zO1xuICAgICAgY29uc29sZS5kaXIodGhpcy5xb3B0aW9ucyk7XG4gICAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnFvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnFvcHQucHVzaCh0aGlzLnFvcHRpb25zW2ldLm9wdGlvbik7XG4gICAgfVxuICAgIGNvbnNvbGUuZGlyKHRoaXMucW9wdCk7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBsZXQgaWQgPSBhcmdzLmluZGV4ICsgMTtcbiAgICBsZXQgb3AgPSB0aGlzLnFvcHRbYXJncy5pbmRleF07XG4gICAgbGV0IGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICdpZCcgOiBpZCxcbiAgICAgICAgJ29wdGlvbicgOiBvcFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcXVlc3Rpb25zXCJdLCBleHRyYXMpO1xuICB9XG5cbn1cbiJdfQ==