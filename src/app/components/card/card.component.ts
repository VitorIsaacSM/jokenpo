import { Component, Input, OnInit } from '@angular/core';
import { CardType } from '../../enums/card.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() type: CardType;

  constructor() { }

  ngOnInit() {
  }

}
