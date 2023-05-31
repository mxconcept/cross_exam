import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  totalProfit: number | undefined;
  categoryProfits: number[] | undefined;
  show_calc:boolean =false;
  constructor() { }

  doMainTask(event: any) {
    this.totalProfit = event.totalProfit;
    this.categoryProfits = event.categoryProfits;
    this.show_calc = true;
  }
}
