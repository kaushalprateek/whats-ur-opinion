// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactDeleteComponent } from "./contacts/contact-delete/contact-delete.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

import { AdminComponent } from "./admin/admin.component";

import { TestComponent } from "./test/test.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "about", component: AboutComponent, data: { title: "About" } },

  {
    path: "admin",
    component: AdminComponent,
    data: { title: "Admin" },
    canActivate: [AuthGuard]
  },

  {
    path: "User",
    component: UserComponent,
    data: { title: "User" },
    canActivate: [AuthGuard]
  },

  {
    path: "test",
    component: TestComponent,
    data: { title: "SurveyApp" }
  },

  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact" },
    canActivate: [AuthGuard]
  },

  {
    path: "contact/contact-list",
    component: ContactListComponent,
    data: { title: "Contact List" },
    canActivate: [AuthGuard]
  },
  {
    path: "contact/contact-list/add",
    component: ContactDetailsComponent,
    data: { title: "Add Contact" },
    canActivate: [AuthGuard]
  },
  {
    path: "contact/contact-list/edit/:id",
    component: ContactDetailsComponent,
    data: { title: "Edit Contact" },
    canActivate: [AuthGuard]
  },
  {
    path: "contact/contact-list/delete/:id",
    component: ContactDeleteComponent,
    data: { title: "Add Contact" },
    canActivate: [AuthGuard]
  },

  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "login", component: LoginComponent, data: { title: "Register" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
