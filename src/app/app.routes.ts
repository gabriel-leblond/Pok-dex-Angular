import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonShowComponent } from './pokemon-show/pokemon-show.component';

export const routes: Routes = [

  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonShowComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'}

];
