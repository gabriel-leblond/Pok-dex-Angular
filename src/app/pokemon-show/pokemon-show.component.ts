import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-pokemon-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-show.component.html',
  styles: ``
})
export class PokemonShowComponent {

  pokemonsList: Pokemon[] | undefined;
  pokemon: Pokemon | undefined;


  constructor(private router: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.pokemonsList = POKEMONS;

    const pokemonId: string|null = this.router.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
    }
  }






}
