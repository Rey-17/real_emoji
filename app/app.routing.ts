import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "~/login/login.component";
import { WelcomeComponent } from "~/welcome/welcome.component";
import { QuestionsComponent } from "~/questions/questions.component";
import { EndComponent } from "~/end/end.component";
import { RegisterComponent } from "~/register/register.component";
import { IntroductionComponent } from "~/introduction/introduction.component";
import { Introduction2Component } from "~/introduction2/introduction2.component";

const routes: Routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    //{ path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'introduction',
        component: IntroductionComponent
    },
    {
        path: 'introduction2',
        component: Introduction2Component
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