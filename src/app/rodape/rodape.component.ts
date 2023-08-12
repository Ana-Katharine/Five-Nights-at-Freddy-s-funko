import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
    title: string = 'Five Nights at Freddy s';
    copyright: string = 'Desenvolvido em 2023';
    developer: string = 'Katharine Start Tech TOTVS';

    redesSociais: Array<any> = [
      {
        nome: 'Facebook',
        link: 'http://www.facebook.com',
        icone: 'https://i.ibb.co/k1PRrGv/bonnie.png'
      },
      {
        nome: 'Instagram',
        link: 'http://www.instagram.com',
        icone: 'https://i.ibb.co/Qk3sghn/coelho.png'
      },
      {
        nome: 'LinkedIn',
        link: 'http://www.linkedin.com',
        icone: 'https://i.ibb.co/S5VxvSW/icons8-five-nights-at-freddys-48.png'
      }
    ]
}
