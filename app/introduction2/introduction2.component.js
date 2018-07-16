"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var Introduction2Component = /** @class */ (function () {
    function Introduction2Component(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id_w = params['id'];
            _this.op_w = params['option'];
        });
        console.log(this.id_w);
        console.log(this.op_w);
    }
    Introduction2Component.prototype.ngOnInit = function () {
        this.text = 'A continuación encontrará algunas afirmaciones sobre sus emociones y sentimientos. Lea atentamente cada frase e ' +
            'indique por favor, el grado de acuerdo o desacuerdo con respecto a las mismas. Seleccione la respuesta que ' +
            'más se aproxime a sus preferencias. ';
        this.text2 = 'No hay respuestas correctas o incorrectas, ni buenas o malas. ' +
            'No emplee mucho tiempo en cada respuesta.';
    };
    Introduction2Component.prototype.continue = function () {
        console.log('continuar');
        var extras = {
            queryParams: {
                'id': this.id_w,
                'option': this.op_w
            }
        };
        this.router.navigate(["/questions"], extras);
    };
    Introduction2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-introduction2',
            templateUrl: './introduction2.component.html',
            styleUrls: ['./introduction2.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions])
    ], Introduction2Component);
    return Introduction2Component;
}());
exports.Introduction2Component = Introduction2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uMi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRyb2R1Y3Rpb24yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBK0M7QUFDL0Msc0RBQTZEO0FBVzdEO0lBTUUsZ0NBQW9CLEtBQXFCLEVBQVUsTUFBd0I7UUFBM0UsaUJBT0U7UUFQa0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLGtIQUFrSDtZQUM5SCw2R0FBNkc7WUFDN0csc0NBQXNDLENBQUM7UUFFdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxnRUFBZ0U7WUFDN0UsMkNBQTJDLENBQUM7SUFDN0MsQ0FBQztJQUVGLHlDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksTUFBTSxHQUFxQjtZQUM3QixXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJO2dCQUNoQixRQUFRLEVBQUcsSUFBSSxDQUFDLElBQUk7YUFDckI7U0FDRixDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBbENVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQU8yQix1QkFBYyxFQUFrQix5QkFBZ0I7T0FOaEUsc0JBQXNCLENBb0NsQztJQUFELDZCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1pbnRyb2R1Y3Rpb24yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ludHJvZHVjdGlvbjIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnRyb2R1Y3Rpb24yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW50cm9kdWN0aW9uMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpZF93OiBzdHJpbmc7XG4gIHB1YmxpYyBvcF93OiBzdHJpbmc7XG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyB0ZXh0Mjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmlkX3cgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLm9wX3cgPSBwYXJhbXNbJ29wdGlvbiddO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaWRfdyk7XG4gICAgY29uc29sZS5sb2codGhpcy5vcF93KTtcbiAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRleHQgPSAnQSBjb250aW51YWNpw7NuIGVuY29udHJhcsOhIGFsZ3VuYXMgYWZpcm1hY2lvbmVzIHNvYnJlIHN1cyBlbW9jaW9uZXMgeSBzZW50aW1pZW50b3MuIExlYSBhdGVudGFtZW50ZSBjYWRhIGZyYXNlIGUgJyArXG4gICAgJ2luZGlxdWUgcG9yIGZhdm9yLCBlbCBncmFkbyBkZSBhY3VlcmRvIG8gZGVzYWN1ZXJkbyBjb24gcmVzcGVjdG8gYSBsYXMgbWlzbWFzLiBTZWxlY2Npb25lIGxhIHJlc3B1ZXN0YSBxdWUgJyArXG4gICAgJ23DoXMgc2UgYXByb3hpbWUgYSBzdXMgcHJlZmVyZW5jaWFzLiAnO1xuXG4gICAgdGhpcy50ZXh0MiA9ICdObyBoYXkgcmVzcHVlc3RhcyBjb3JyZWN0YXMgbyBpbmNvcnJlY3RhcywgbmkgYnVlbmFzIG8gbWFsYXMuICcrXG4gICAgJ05vIGVtcGxlZSBtdWNobyB0aWVtcG8gZW4gY2FkYSByZXNwdWVzdGEuJztcbiAgIH1cblxuICBjb250aW51ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnY29udGludWFyJyk7XG5cbiAgICBsZXQgZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgJ2lkJyA6IHRoaXMuaWRfdyxcbiAgICAgICAgJ29wdGlvbicgOiB0aGlzLm9wX3dcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3F1ZXN0aW9uc1wiXSwgZXh0cmFzKTtcbiAgfVxuXG59XG4iXX0=