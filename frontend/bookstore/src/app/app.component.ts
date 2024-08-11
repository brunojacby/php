import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'Meu Aplicativo de Livros';

  constructor(private router: Router) {}

  navigateToList(): void {
    this.router.navigate(['/list']);
  }

  navigateToAdd(): void {
    this.router.navigate(['/add']);
  }
}
