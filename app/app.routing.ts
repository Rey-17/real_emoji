import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "~/login/login.component";
import { WelcomeComponent } from "~/welcome/welcome.component";
import { QuestionsComponent } from "~/questions/questions.component";
import { EndComponent } from "~/end/end.component";

const routes: Routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    //{ path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent
    },
    {
        path: 'end',
        component: EndComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }