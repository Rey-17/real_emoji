import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { RadioButtonModule } from 'nativescript-radiobutton/angular';

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';

import { AppService } from "~/app.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { QuestionsComponent } from "~/questions/questions.component";
import { EndComponent } from './end/end.component';
import { IntroductionComponent } from "~/introduction/introduction.component";
import { Introduction2Component } from "~/introduction2/introduction2.component";
import { SorryComponent } from "~/sorry/sorry.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        //RadioButtonModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        WelcomeComponent,
        QuestionsComponent,
        EndComponent,
        RegisterComponent,
        IntroductionComponent,
        Introduction2Component,
        SorryComponent
    ],
    providers: [
        ItemService,
        AppService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
