import { Component, Input, OnInit } from '@angular/core';
import { CardType } from '../../enums/card.enum';

@Component({
  selector: 'app-card-pick',
  templateUrl: './card-pick.component.html',
  styleUrls: ['./card-pick.component.scss']
})
export class CardPickComponent implements OnInit {

  types = CardType

  constructor() { }

  ngOnInit() {
  }

}
