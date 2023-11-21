import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonShowComponent } from "./pokemon-show/pokemon-show.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit{
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  searchBoxSwitch: Boolean = false;

  ngOnInit(): void {

    console.log(this.pokemonsList);

  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonsList.find( pokemon => pokemon.id == +pokemonId )

    if (pokemon) {
      this.searchBoxSwitch = true;
      this.pokemonSelected = pokemon;
      console.log(`Tu as demander  ${pokemon.name}`);
    } else {
      this.searchBoxSwitch = true;
      this.pokemonSelected = pokemon;
      console.log(`Le pokemon n'existe pas`)
    }
  }
}
