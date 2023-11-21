import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

getPokemonList(): Pokemon[]{
  return POKEMONS;
}

getPokemonId(pokemonID: number): Pokemon|undefined {
  return POKEMONS.find(pokemon => pokemon.id == pokemonID);
}

getPokemonTypeList(): string[]{
  return [
    'Plante',
    'Eau',
    'Feu',
    'Vol',
    'Insecte',
    'Normal',
    'Electrik',
    'Poisson',
    'Fée',
    'Combat',
    'Psy'
  ]
}

}
