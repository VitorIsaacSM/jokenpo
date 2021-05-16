import { Component, Input, OnInit } from '@angular/core';
import { CardType } from '../../enums/card.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  name: string;
  @Input() type: CardType;

  types = CardType;

  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case CardType.PEDRA:
        this.name = "Pedra";
        break;
      case CardType.PAPEL:
        this.name = "Papel";
        break;
      case CardType.TESOURA:
        this.name = "Tesoura";
        break;
    }
  }

}
