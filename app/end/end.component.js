"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var EndComponent = /** @class */ (function () {
    function EndComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.atencion = params['atencion'];
            _this.claridad = params['claridad'];
            _this.reparacion = params['reparacion'];
            _this.data = params['data'];
            _this.welcome = params['welcome'];
        });
    }
    EndComponent.prototype.ngOnInit = function () { };
    EndComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-end',
            templateUrl: './end.component.html',
            styleUrls: ['./end.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions])
    ], EndComponent);
    return EndComponent;
}());
exports.EndComponent = EndComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUE2RDtBQVE3RDtJQU9FLHNCQUFvQixLQUFxQixFQUFVLE1BQXdCO1FBQTNFLGlCQVFDO1FBUm1CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBUSxHQUFSLGNBQWEsQ0FBQztJQWpCSCxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQVEyQix1QkFBYyxFQUFrQix5QkFBZ0I7T0FQaEUsWUFBWSxDQW1CeEI7SUFBRCxtQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VuZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBhdGVuY2lvbjogbnVtYmVyO1xuICBwdWJsaWMgY2xhcmlkYWQ6IG51bWJlcjtcbiAgcHVibGljIHJlcGFyYWNpb246IG51bWJlcjtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIHdlbGNvbWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5hdGVuY2lvbiA9IHBhcmFtc1snYXRlbmNpb24nXTtcbiAgICAgIHRoaXMuY2xhcmlkYWQgPSBwYXJhbXNbJ2NsYXJpZGFkJ107XG4gICAgICB0aGlzLnJlcGFyYWNpb24gPSBwYXJhbXNbJ3JlcGFyYWNpb24nXTtcbiAgICAgIHRoaXMuZGF0YSA9IHBhcmFtc1snZGF0YSddO1xuICAgICAgdGhpcy53ZWxjb21lID0gcGFyYW1zWyd3ZWxjb21lJ107XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=