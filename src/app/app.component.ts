import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OneComponent } from "./component/one/one.component";
import { TwoComponent } from "./component/two/two.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, OneComponent, TwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private router: Router) {}

  navigate(page:string) {
    this.router.navigate([`/${page}`]);
  }
  
}