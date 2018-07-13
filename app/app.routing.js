"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("~/login/login.component");
var welcome_component_1 = require("~/welcome/welcome.component");
var questions_component_1 = require("~/questions/questions.component");
var end_component_1 = require("~/end/end.component");
var register_component_1 = require("~/register/register.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCx1RUFBcUU7QUFDckUscURBQW1EO0FBQ25ELG9FQUFrRTtBQUVsRSxJQUFNLE1BQU0sR0FBVztJQUNuQix3REFBd0Q7SUFDeEQsK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RDtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGdDQUFjO0tBQzVCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztLQUM1QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLHNDQUFpQjtLQUMvQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsb0NBQWdCO0tBQzlCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsV0FBVztRQUNqQixTQUFTLEVBQUUsd0NBQWtCO0tBQ2hDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSw0QkFBWTtLQUMxQjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tIFwifi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBRdWVzdGlvbnNDb21wb25lbnQgfSBmcm9tIFwifi9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW5kQ29tcG9uZW50IH0gZnJvbSBcIn4vZW5kL2VuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIn4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIC8veyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgLy97IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIC8veyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAncmVnaXN0ZXInLFxuICAgICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICd3ZWxjb21lJyxcbiAgICAgICAgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdxdWVzdGlvbnMnLFxuICAgICAgICBjb21wb25lbnQ6IFF1ZXN0aW9uc0NvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnZW5kJyxcbiAgICAgICAgY29tcG9uZW50OiBFbmRDb21wb25lbnRcbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==