import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-survey",
  templateUrl: "./admin-survey.component.html",
  styleUrls: ["./admin-survey.component.css"]
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
