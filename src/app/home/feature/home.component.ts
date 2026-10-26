import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { CardComponent } from "../../shared/ui/card/card.component";
import { TerminalComponent } from "../ui/terminal/terminal.component";

@Component({
  selector: "app-home",
  imports: [NgOptimizedImage, CardComponent, TerminalComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  readonly textList = [
    "Hello world",
    "I'm Corey",
    "I use vim btw",
    "Please ask me about it",
    "I need validation",
    "I also use a split ergonomic keyboard",
    "I know, it's pretty cool",
    "Did you know I care lots about ergonomics and optimisations?",
    "No?",
    "Why does everyone always say that?",
    "Are you still here?",
    "I thought you would have gone to a different page by now",
    "I haven't accounted for this scenario",
    "I'll just start from the top",
  ];
}
