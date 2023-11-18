import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {
  pokemonsList: Pokemon[] = POKEMONS;
}
