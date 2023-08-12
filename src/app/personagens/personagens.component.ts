import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf, CommonModule, MatIconModule ]
})
export class PersonagensComponent {
  constructor(private router: Router) { }

  verHistoria(personagemId: string) {
    this.router.navigate(['/historia', personagemId]);
  }

  toogleFavorito(index: number): void {
    this.personagens[index].favorito = !this.personagens[index].favorito
  }


  texto: string = 'Welcome to the Five Nights at Freddy s!';
  data: any = new Date();
  personagens: Array<any> = [
    {
      id: 1,
      titulo: 'Freddy',
      foto: 'https://i.ibb.co/LJPBv6S/Idle-Freddy.webp',
      preco: 200,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Mangle',
      foto: 'https://i.ibb.co/55pPDDj/Idle-Mangle.webp',
      preco: 150,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Balloon Boy',
      foto: 'https://i.ibb.co/DVsww1L/Idle-Balloon-Boy.webp',
      preco: 140,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Chica',
      foto: 'https://i.ibb.co/cwxYbsH/Idle-Chica.webp',
      preco: 120,
      favorito: false
    },
    {
      id: 5,
      titulo: 'Bonnie',
      foto: 'https://i.ibb.co/Lxy90jj/Idle-Bonnie.webp',
      preco: 250,
      favorito: true
    },
    {
      id: 6,
      titulo: 'Foxy',
      foto: 'https://i.ibb.co/JpZgWGp/IdleFoxy.webp',
      preco: 100,
      favorito: true
    }
  ];
}
