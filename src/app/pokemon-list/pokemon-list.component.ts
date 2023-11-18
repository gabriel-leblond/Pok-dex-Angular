import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {
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
