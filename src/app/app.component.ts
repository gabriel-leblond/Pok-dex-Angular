import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit{
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {

    console.log(this.pokemonsList);

  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonsList.find( pokemon => pokemon.id == +pokemonId )

    if (pokemon) {
      this.pokemonSelected = pokemon;
      console.log(`Tu as demander  ${pokemon.name}`);
    } else {
      this.pokemonSelected = pokemon;
      console.log(`Le pokemon n'existe pas`)
    }
  }
}
