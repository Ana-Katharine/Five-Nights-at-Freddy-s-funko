import { Component } from '@angular/core';


@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss'],
  standalone: true
})

export class HistoriaComponent {
  titulo: string = 'Freddy';
  foto1: string = 'https://i.ibb.co/hKJB16w/freddy-removebg-preview.png';
  foto2: string = 'https://i.ibb.co/rZFMK1t/Idle-WFreddy.webp';

  description1: string = 'Freddy Fazbear, o carismático urso animatrônico, uma vez foi a estrela do restaurante Freddy Fazbear s Pizza, encantando as crianças com suas canções alegres e danças.';
  description2: string = 'No entanto, à noite, ele e seus amigos ganham vida de maneira apavorante, perseguindo qualquer um que se aventurasse no restaurante.';

}