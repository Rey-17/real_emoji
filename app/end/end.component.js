"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var app_service_1 = require("~/app.service");
var EndComponent = /** @class */ (function () {
    function EndComponent(route, router, appService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.applicationSettings = require("application-settings");
        this.route.queryParams.subscribe(function (params) {
            _this.atencion = params['atencion'];
            _this.claridad = params['claridad'];
            _this.reparacion = params['reparacion'];
            _this.data = JSON.parse(params['data']);
            _this.welcome = params['welcome'];
            _this.id_user = _this.applicationSettings.getNumber('id_user');
            _this.data_save = { atencion: params['atencion'], claridad: params['claridad'],
                reparacion: params['reparacion'], data: JSON.parse(params['data']), welcome: params['welcome'], id_user: _this.id_user };
        });
    }
    EndComponent.prototype.ngOnInit = function () {
        //console.dir(this.data_save);
        // if( this.atencion == )
        this.genero = this.applicationSettings.getNumber('genero');
        // 0 es hombre
        if (this.genero == 0) {
            if (this.atencion < 21) {
                this.msg_atencion = 'Presta poca atención';
            }
            else if (this.atencion >= 22 && this.atencion <= 32) {
                this.msg_atencion = 'Adecuada atención';
            }
            else if (this.atencion > 33) {
                this.msg_atencion = 'Presta demasiada Atención';
            }
            if (this.claridad < 25) {
                this.msg_claridad = 'Debe mejorar su claridad';
            }
            else if (this.claridad >= 26 && this.claridad <= 35) {
                this.msg_claridad = 'Adecuada Claridad';
            }
            else if (this.claridad > 36) {
                this.msg_claridad = 'Excelente Claridad';
            }
            if (this.reparacion < 23) {
                this.msg_reparacion = 'Debe mejorar su reparación';
            }
            else if (this.reparacion >= 24 && this.reparacion <= 35) {
                this.msg_reparacion = 'Adecuada Reparación';
            }
            else if (this.reparacion > 36) {
                this.msg_reparacion = 'Excelente Reparación';
            }
        }
        else if (this.genero == 1) {
            if (this.atencion < 24) {
                this.msg_atencion = 'Presta poca atención';
            }
            else if (this.atencion >= 25 && this.atencion <= 35) {
                this.msg_atencion = 'Adecuada atención';
            }
            else if (this.atencion > 36) {
                this.msg_atencion = 'Presta demasiada Atención';
            }
            if (this.claridad < 23) {
                this.msg_claridad = 'Debe mejorar su claridad';
            }
            else if (this.claridad >= 24 && this.claridad <= 34) {
                this.msg_claridad = 'Adecuada Claridad';
            }
            else if (this.claridad > 35) {
                this.msg_claridad = 'Excelente Claridad';
            }
            if (this.reparacion < 23) {
                this.msg_reparacion = 'Debe mejorar su reparación';
            }
            else if (this.reparacion >= 24 && this.reparacion <= 34) {
                this.msg_reparacion = 'Adecuada Reparación';
            }
            else if (this.reparacion > 35) {
                this.msg_reparacion = 'Excelente Reparación';
            }
        }
        this.saveDta();
    };
    EndComponent.prototype.saveDta = function () {
        this.appService.saveData(this.data_save).subscribe(function (res) {
            console.dir(res);
        }, function (error) {
            console.dir(error);
        });
    };
    EndComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-end',
            templateUrl: './end.component.html',
            styleUrls: ['./end.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, app_service_1.AppService])
    ], EndComponent);
    return EndComponent;
}());
exports.EndComponent = EndComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUE2RDtBQUM3RCw2Q0FBMkM7QUFRM0M7SUFpQkUsc0JBQW9CLEtBQXFCLEVBQVUsTUFBd0IsRUFBVSxVQUFzQjtRQUEzRyxpQkFZQztRQVptQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUozRyx3QkFBbUIsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUtwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFN0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzVFLFVBQVUsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFF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QUNILENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTlGVSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQWtCMkIsdUJBQWMsRUFBa0IseUJBQWdCLEVBQXNCLHdCQUFVO09BakJoRyxZQUFZLENBZ0d4QjtJQUFELG1CQUFDO0NBQUEsQUFoR0QsSUFnR0M7QUFoR1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnfi9hcHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1lbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW5kLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGF0ZW5jaW9uOiBudW1iZXI7XG4gIHB1YmxpYyBjbGFyaWRhZDogbnVtYmVyO1xuICBwdWJsaWMgcmVwYXJhY2lvbjogbnVtYmVyO1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgd2VsY29tZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBkYXRhX3NhdmU6IGFueTtcbiAgcHVibGljIGlkX3VzZXI6IG51bWJlcjtcbiAgcHVibGljIG1zZ2VycjogYW55O1xuICBwdWJsaWMgbXNndDogYW55O1xuICBwdWJsaWMgZ2VuZXJvOiBhbnk7XG4gIHB1YmxpYyBtc2dfYXRlbmNpb246IFN0cmluZztcbiAgYXBwbGljYXRpb25TZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbiAgbXNnX2NsYXJpZGFkOiBzdHJpbmc7XG4gIG1zZ19yZXBhcmFjaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5hdGVuY2lvbiA9IHBhcmFtc1snYXRlbmNpb24nXTtcbiAgICAgIHRoaXMuY2xhcmlkYWQgPSBwYXJhbXNbJ2NsYXJpZGFkJ107XG4gICAgICB0aGlzLnJlcGFyYWNpb24gPSBwYXJhbXNbJ3JlcGFyYWNpb24nXTtcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UocGFyYW1zWydkYXRhJ10pO1xuICAgICAgdGhpcy53ZWxjb21lID0gcGFyYW1zWyd3ZWxjb21lJ107XG4gICAgICB0aGlzLmlkX3VzZXIgPSB0aGlzLmFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0TnVtYmVyKCdpZF91c2VyJyk7XG5cbiAgICAgIHRoaXMuZGF0YV9zYXZlID0ge2F0ZW5jaW9uOiBwYXJhbXNbJ2F0ZW5jaW9uJ10sIGNsYXJpZGFkOiBwYXJhbXNbJ2NsYXJpZGFkJ10sXG4gICAgICByZXBhcmFjaW9uOiBwYXJhbXNbJ3JlcGFyYWNpb24nXSwgZGF0YTogSlNPTi5wYXJzZShwYXJhbXNbJ2RhdGEnXSksIHdlbGNvbWU6IHBhcmFtc1snd2VsY29tZSddLCBpZF91c2VyOiB0aGlzLmlkX3VzZXJ9O1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIC8vY29uc29sZS5kaXIodGhpcy5kYXRhX3NhdmUpO1xuICAgIC8vIGlmKCB0aGlzLmF0ZW5jaW9uID09IClcbiAgICB0aGlzLmdlbmVybyA9IHRoaXMuYXBwbGljYXRpb25TZXR0aW5ncy5nZXROdW1iZXIoJ2dlbmVybycpO1xuICAgIC8vIDAgZXMgaG9tYnJlXG4gICAgaWYodGhpcy5nZW5lcm8gPT0gMCl7XG4gICAgICBpZih0aGlzLmF0ZW5jaW9uIDwgMjEpe1xuICAgICAgICB0aGlzLm1zZ19hdGVuY2lvbiA9ICdQcmVzdGEgcG9jYSBhdGVuY2nDs24nO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuYXRlbmNpb24gPj0gMjIgJiYgdGhpcy5hdGVuY2lvbiA8PSAzMiApe1xuICAgICAgICB0aGlzLm1zZ19hdGVuY2lvbiA9ICdBZGVjdWFkYSBhdGVuY2nDs24nO1xuICAgICAgfSBlbHNlIGlmKCB0aGlzLmF0ZW5jaW9uID4gMzMpe1xuICAgICAgICB0aGlzLm1zZ19hdGVuY2lvbiA9ICdQcmVzdGEgZGVtYXNpYWRhIEF0ZW5jacOzbic7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY2xhcmlkYWQgPCAyNSApe1xuICAgICAgICB0aGlzLm1zZ19jbGFyaWRhZCA9ICdEZWJlIG1lam9yYXIgc3UgY2xhcmlkYWQnO1xuICAgICAgfWVsc2UgaWYodGhpcy5jbGFyaWRhZCA+PSAyNiAmJiB0aGlzLmNsYXJpZGFkIDw9IDM1KXtcbiAgICAgICAgdGhpcy5tc2dfY2xhcmlkYWQgPSAnQWRlY3VhZGEgQ2xhcmlkYWQnO1xuICAgICAgfWVsc2UgaWYodGhpcy5jbGFyaWRhZCA+IDM2KXtcbiAgICAgICAgdGhpcy5tc2dfY2xhcmlkYWQgPSAnRXhjZWxlbnRlIENsYXJpZGFkJztcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5yZXBhcmFjaW9uIDwgMjMpIHtcbiAgICAgICAgdGhpcy5tc2dfcmVwYXJhY2lvbiA9ICdEZWJlIG1lam9yYXIgc3UgcmVwYXJhY2nDs24nO1xuICAgICAgfSBlbHNlIGlmKHRoaXMucmVwYXJhY2lvbiA+PSAyNCAmJiB0aGlzLnJlcGFyYWNpb24gPD0gMzUpe1xuICAgICAgICB0aGlzLm1zZ19yZXBhcmFjaW9uID0gJ0FkZWN1YWRhIFJlcGFyYWNpw7NuJztcbiAgICAgIH1lbHNlIGlmKCB0aGlzLnJlcGFyYWNpb24gPiAzNiApIHtcbiAgICAgICAgdGhpcy5tc2dfcmVwYXJhY2lvbiA9ICdFeGNlbGVudGUgUmVwYXJhY2nDs24nO1xuICAgICAgfVxuICAgIH1lbHNlIGlmKCB0aGlzLmdlbmVybyA9PSAxICl7XG4gICAgICBpZih0aGlzLmF0ZW5jaW9uIDwgMjQpe1xuICAgICAgICB0aGlzLm1zZ19hdGVuY2lvbiA9ICdQcmVzdGEgcG9jYSBhdGVuY2nDs24nO1xuICAgICAgfSBlbHNlIGlmKHRoaXMuYXRlbmNpb24gPj0gMjUgJiYgdGhpcy5hdGVuY2lvbiA8PSAzNSApe1xuICAgICAgICB0aGlzLm1zZ19hdGVuY2lvbiA9ICdBZGVjdWFkYSBhdGVuY2nDs24nO1xuICAgICAgfSBlbHNlIGlmKCB0aGlzLmF0ZW5jaW9uID4gMzYpe1xuICAgICAgICB0aGlzLm1zZ19hdGVuY2lvbiA9ICdQcmVzdGEgZGVtYXNpYWRhIEF0ZW5jacOzbic7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY2xhcmlkYWQgPCAyMyApe1xuICAgICAgICB0aGlzLm1zZ19jbGFyaWRhZCA9ICdEZWJlIG1lam9yYXIgc3UgY2xhcmlkYWQnO1xuICAgICAgfWVsc2UgaWYodGhpcy5jbGFyaWRhZCA+PSAyNCAmJiB0aGlzLmNsYXJpZGFkIDw9IDM0KXtcbiAgICAgICAgdGhpcy5tc2dfY2xhcmlkYWQgPSAnQWRlY3VhZGEgQ2xhcmlkYWQnO1xuICAgICAgfWVsc2UgaWYodGhpcy5jbGFyaWRhZCA+IDM1KXtcbiAgICAgICAgdGhpcy5tc2dfY2xhcmlkYWQgPSAnRXhjZWxlbnRlIENsYXJpZGFkJztcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5yZXBhcmFjaW9uIDwgMjMpIHtcbiAgICAgICAgdGhpcy5tc2dfcmVwYXJhY2lvbiA9ICdEZWJlIG1lam9yYXIgc3UgcmVwYXJhY2nDs24nO1xuICAgICAgfSBlbHNlIGlmKHRoaXMucmVwYXJhY2lvbiA+PSAyNCAmJiB0aGlzLnJlcGFyYWNpb24gPD0gMzQpe1xuICAgICAgICB0aGlzLm1zZ19yZXBhcmFjaW9uID0gJ0FkZWN1YWRhIFJlcGFyYWNpw7NuJztcbiAgICAgIH1lbHNlIGlmKCB0aGlzLnJlcGFyYWNpb24gPiAzNSApIHtcbiAgICAgICAgdGhpcy5tc2dfcmVwYXJhY2lvbiA9ICdFeGNlbGVudGUgUmVwYXJhY2nDs24nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNhdmVEdGEoKTtcbiAgfVxuXG4gIHNhdmVEdGEoKSB7XG4gICAgdGhpcy5hcHBTZXJ2aWNlLnNhdmVEYXRhKHRoaXMuZGF0YV9zYXZlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==