import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-servicios-fideicomiso-clases',
  templateUrl: './home-servicios-fideicomiso-clases.component.html',
  styleUrls: ['./home-servicios-fideicomiso-clases.component.css']
})
export class HomeServiciosFideicomisoClasesComponent implements OnInit {
  selected = 0;

  constructor() { }

  ngOnInit() {
  }

  fideicomisoSelected(num: number) {
    this.selected = num;
  }
  isActive(clasNum: number) {
    if (clasNum === this.selected) {
      return 'nav-link active';
    } else {
      return 'nav-link';
    }
  }


}
