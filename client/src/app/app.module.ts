// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { BasePageComponent } from "./partials/base-page/base-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactDeleteComponent } from "./contacts/contact-delete/contact-delete.component";
import { SurveyComponent } from "./test/survey.component";
import { SurveyCreatorComponent } from "./test/survey.creator.component";

// Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { AuthService } from "./services/auth.service";
import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor
} from "@auth0/angular-jwt";

// Route Guards
import { AuthGuard } from "./guards/auth.guard";
import { AdminComponent } from "./admin/admin.component";

import { TestComponent } from "./test/test.component";

import { SurveyAppComponent } from "./survey-app/survey-app.component";
import { UserComponent } from "./user/user.component";

export function jwtTokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,

    ContactComponent,
    PageNotFoundComponent,
    ContactListComponent,
    RegisterComponent,
    LoginComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,

    AdminComponent,

    UserComponent,
    SurveyAppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
