import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {
  appareil = {
    id: 1,
    name: 'machine à laver',
    status: ['étaint', 'allumé', 'étaint', 'allumé']
  };
  marque = {
    name: ['LG', 'worldpool', 'samasung', 'Le pouce']
  };

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
