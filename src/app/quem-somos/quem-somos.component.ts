import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {

  titulo: string = 'Bem-vindo à nossa misteriosa loja inspirada no mundo de Five Nights at Freddy s!';
  foto: string = 'https://i.ibb.co/pbB9CZD/Attack-NFredbear.webp';

  description: string = 'Somos apaixonados por trazer a emoção e a nostalgia deste lendário jogo para a vida real, oferecendo uma coleção exclusiva de Funko Pops dos personagens mais icônicos do universo FNAF. Nossa loja é um paraíso para os fãs que desejam ter uma parte do suspense e mistério de Five Nights at Freddy s em suas mãos';
  description2: string = 'Cada Funko Pop é meticulosamente detalhado para capturar a essência arrepiante dos animatrônicos que você conheceu e temeu durante as noites assustadoras. De Freddy Fazbear, o líder carismático, a Bonnie o coelho e Chica a galinha, nossos colecionáveis ​capturam cada personagem único que fez esses personagens ganharem um lugar especial em seu coração.';
  description3: string = 'Nossa missão é trazer alegria e arrepios para os fãs, oferecendo uma maneira tangível de se conectar com o universo de Five Nights at Freddy s. ';
}