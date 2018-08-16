"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
// import { RadioButtonModule } from 'nativescript-radiobutton/angular';
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var login_component_1 = require("./login/login.component");
var welcome_component_1 = require("./welcome/welcome.component");
var register_component_1 = require("./register/register.component");
var app_service_1 = require("~/app.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var questions_component_1 = require("~/questions/questions.component");
var end_component_1 = require("./end/end.component");
var introduction_component_1 = require("~/introduction/introduction.component");
var introduction2_component_1 = require("~/introduction2/introduction2.component");
var sorry_component_1 = require("~/sorry/sorry.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.HttpClientModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                login_component_1.LoginComponent,
                welcome_component_1.WelcomeComponent,
                questions_component_1.QuestionsComponent,
                end_component_1.EndComponent,
                register_component_1.RegisterComponent,
                introduction_component_1.IntroductionComponent,
                introduction2_component_1.Introduction2Component,
                sorry_component_1.SorryComponent
            ],
            providers: [
                item_service_1.ItemService,
                app_service_1.AppService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsNkNBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSwyREFBeUQ7QUFDekQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUVsRSw2Q0FBMkM7QUFFM0MsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUlyRSx1RUFBcUU7QUFDckUscURBQW1EO0FBQ25ELGdGQUE4RTtBQUM5RSxtRkFBaUY7QUFDakYsMkRBQXlEO0FBc0N6RDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFwQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2FBRTFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLDRCQUFZO2dCQUNaLHNDQUFpQjtnQkFDakIsOENBQXFCO2dCQUNyQixnREFBc0I7Z0JBQ3RCLGdDQUFjO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLHdCQUFVO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBpbXBvcnQgeyBSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1yYWRpb2J1dHRvbi9hbmd1bGFyJztcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tICcuL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tIFwifi9hcHAuc2VydmljZVwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IFF1ZXN0aW9uc0NvbXBvbmVudCB9IGZyb20gXCJ+L3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbmRDb21wb25lbnQgfSBmcm9tICcuL2VuZC9lbmQuY29tcG9uZW50JztcbmltcG9ydCB7IEludHJvZHVjdGlvbkNvbXBvbmVudCB9IGZyb20gXCJ+L2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnRyb2R1Y3Rpb24yQ29tcG9uZW50IH0gZnJvbSBcIn4vaW50cm9kdWN0aW9uMi9pbnRyb2R1Y3Rpb24yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU29ycnlDb21wb25lbnQgfSBmcm9tIFwifi9zb3JyeS9zb3JyeS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgLy9SYWRpb0J1dHRvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBXZWxjb21lQ29tcG9uZW50LFxuICAgICAgICBRdWVzdGlvbnNDb21wb25lbnQsXG4gICAgICAgIEVuZENvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIEludHJvZHVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSW50cm9kdWN0aW9uMkNvbXBvbmVudCxcbiAgICAgICAgU29ycnlDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgQXBwU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==