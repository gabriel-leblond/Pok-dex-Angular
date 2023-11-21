import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router, RouterOutlet } from "@angular/router";
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterOutlet],
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent implements OnInit{

  pokemonsList: Pokemon[] = this.pokemonService.getPokemonList();
  pokemonSelected: Pokemon|undefined;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
    // this.pokemonsList = this.pokemonService.getPokemonList();
    console.log(`service depuis list comp${this.pokemonsList}`);
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

  gotoPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon?.id])
  }










}
