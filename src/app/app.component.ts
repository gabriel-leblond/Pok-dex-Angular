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

  ngOnInit(): void {

    console.log(this.pokemonsList);

  }

  selectPokemon(event: MouseEvent){
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Tu as clicker sur ${this.pokemonsList[index].name}`)
  }
}
