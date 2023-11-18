import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = '#ff917d';
        break;
      case 'Eau':
        color = '#7d91ff';
        break;
      case 'Plante':
        color = '#8cff7d';
        break;
      case 'Insecte':
        color = '#cdff7d';
        break;
      case 'Normal':
        color = '#ededed';
        break;
      case 'Vol':
        color = '#7ddeff';
        break;
      case 'Poison':
        color = '#7dffd2';
        break;
      case 'Fée':
        color = '#f47dff';
        break;
      case 'Psy':
        color = '#b37dff';
        break;
      case 'Electrik':
        color = '#fff97d';
        break;
      case 'Combat':
        color = '#ff7d7d';
        break;
      default:
        color = '#ededed';
        break;
    }

    return 'background-color:' + color + ';';



  }

}
