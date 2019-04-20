import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute, private authService: AuthService) {
    super(route);
  }

  ngOnInit() {}

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}

function add_feed() {
  var div1 = document.createElement("div");
  // Get template data
  div1.innerHTML = document.getElementById("newlinktpl").innerHTML;
  // append to our form, so that template data
  //become part of form
  document.getElementById("newlink").appendChild(div1);
}
