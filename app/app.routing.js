"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("~/login/login.component");
var welcome_component_1 = require("~/welcome/welcome.component");
var questions_component_1 = require("~/questions/questions.component");
var end_component_1 = require("~/end/end.component");
var register_component_1 = require("~/register/register.component");
var introduction_component_1 = require("~/introduction/introduction.component");
var introduction2_component_1 = require("~/introduction2/introduction2.component");
var sorry_component_1 = require("~/sorry/sorry.component");
var routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    //{ path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent },
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'introduction',
        component: introduction_component_1.IntroductionComponent
    },
    {
        path: 'introduction2',
        component: introduction2_component_1.Introduction2Component
    },
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'questions',
        component: questions_component_1.QuestionsComponent
    },
    {
        path: 'end',
        component: end_component_1.EndComponent
    },
    {
        path: 'sorry',
        component: sorry_component_1.SorryComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCx1RUFBcUU7QUFDckUscURBQW1EO0FBQ25ELG9FQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsbUZBQWlGO0FBQ2pGLDJEQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQix3REFBd0Q7SUFDeEQsK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RDtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGdDQUFjO0tBQzVCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztLQUM1QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLHNDQUFpQjtLQUMvQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDhDQUFxQjtLQUNuQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLGdEQUFzQjtLQUNwQztJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsb0NBQWdCO0tBQzlCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsV0FBVztRQUNqQixTQUFTLEVBQUUsd0NBQWtCO0tBQ2hDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSw0QkFBWTtLQUMxQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7S0FDNUI7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSBcIn4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25zQ29tcG9uZW50IH0gZnJvbSBcIn4vcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVuZENvbXBvbmVudCB9IGZyb20gXCJ+L2VuZC9lbmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW50cm9kdWN0aW9uQ29tcG9uZW50IH0gZnJvbSBcIn4vaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEludHJvZHVjdGlvbjJDb21wb25lbnQgfSBmcm9tIFwifi9pbnRyb2R1Y3Rpb24yL2ludHJvZHVjdGlvbjIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTb3JyeUNvbXBvbmVudCB9IGZyb20gXCJ+L3NvcnJ5L3NvcnJ5LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICAvL3sgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIC8veyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICAvL3sgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICAgICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnaW50cm9kdWN0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBJbnRyb2R1Y3Rpb25Db21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2ludHJvZHVjdGlvbjInLFxuICAgICAgICBjb21wb25lbnQ6IEludHJvZHVjdGlvbjJDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3dlbGNvbWUnLFxuICAgICAgICBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3F1ZXN0aW9ucycsXG4gICAgICAgIGNvbXBvbmVudDogUXVlc3Rpb25zQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdlbmQnLFxuICAgICAgICBjb21wb25lbnQ6IEVuZENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnc29ycnknLFxuICAgICAgICBjb21wb25lbnQ6IFNvcnJ5Q29tcG9uZW50XG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=