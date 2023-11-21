import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
// import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-show',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-show.component.html',
  styles: ``
})
export class PokemonShowComponent {

  pokemonsList: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
    ){}

  ngOnInit(): void
  {
    // this.pokemonsList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      // this.pokemon = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
      this.pokemon = this.pokemonService.getPokemonId(+pokemonId);
    }
  }
}
