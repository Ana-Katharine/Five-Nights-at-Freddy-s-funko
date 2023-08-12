import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})
export class CarroselComponent 
  implements OnInit, OnDestroy
  {
    // Guarda a referência do temporizador.
    // Assim conseguimos interromper o temporizador
    // a qualquer momento
    timerSubs!: Subscription;
  
    // Array com a URL das imagens que serão exibidas
    // no carrossel
    @Input() imagens: string[] = [
        'https://i.ibb.co/0ydHRBd/Design-sem-nome.png',
        'https://i.ibb.co/fkJvXLs/imagem-2.jpg',
        'https://i.ibb.co/Ht3sCSd/imagem-3.jpg'
    ];
  
    // Guarda a posição no array "imagens" que
    // corresponde a imagem que está sendo exibida
    // no carrossel
    private _indexImagemAtiva: number = 0;
    get indexImagemAtiva() {
      return this._indexImagemAtiva;
    }
  
    set indexImagemAtiva(value: number) {
      this._indexImagemAtiva =
        value < this.imagens.length ? value : 0;
    }
  
    ngOnInit(): void {
      this.iniciarTimer();
    }
  
    ngOnDestroy(): void {
      this.pararTimer();
    }
  
    iniciarTimer(): void {
      this.timerSubs = timer(3000).subscribe(() => {
        this.ativarImagem(
          this.indexImagemAtiva + 1
        );
      });
    }
  
    pararTimer(): void {
      this.timerSubs?.unsubscribe();
    }
  
    ativarImagem(index: number): void {
      this.indexImagemAtiva = index;
      this.iniciarTimer();
    }
}

