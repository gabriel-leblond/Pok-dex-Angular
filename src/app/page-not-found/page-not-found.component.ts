import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="not-found-box">
      <p class="not-found">404</p>
      <p class="oops">Oops ! La page démandé n'existe pas</p>
      <a href="/pokemons"> Retour à l'accueil</a>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {

}
