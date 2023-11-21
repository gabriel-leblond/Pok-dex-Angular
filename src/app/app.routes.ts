import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonShowComponent } from './pokemon-show/pokemon-show.component';
import { Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonShowComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];
