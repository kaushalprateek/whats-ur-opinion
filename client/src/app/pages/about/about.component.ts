import { Component, OnInit, Pipe, PipeTransform, Input } from "@angular/core";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent extends BasePageComponent implements OnInit {
  title = "app works!";
  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "Choose below food items you like?",
            renderAs: "box1",
            choices: ["Salmon", "Talapia", "Singhns"]
          },
          {
            type: "radiogroup",
            name: "How would you rate us?",
            renderAs: "box2",
            choices: ["Good", "Bad", "Excellent"]
          },

          {
            type: "radiogroup",
            name: "Rate our customer service:",
            renderAs: "box3",
            choices: ["ok!!", "Good!!", "Excellent!!"]
          },

          {
            type: "radiogroup",
            name: "Rate us out of 3?",
            renderAs: "box4",
            choices: ["One", "Two", "Three"]
          },

          {
            type: "radiogroup",
            name: "Would you like to visit again?",
            renderAs: "box5",
            choices: ["Yes", "No"]
          }
        ]
      }
    ]
  };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    console.log(result);
    alert("The results are:" + JSON.stringify(result));
    document.getElementById("json").innerHTML = JSON.stringify(
      result,
      undefined,
      6
    );
  }
}
