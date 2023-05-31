import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  prices: number[] = [20, 40, 100, 150, 300];

  calculateProfits(ticketData: any): { totalProfit: number, categoryProfits: number[] } {
    let totalProfit = 0;
    let categoryProfits: number[] = [];

    for (let i = 0; i < this.prices.length; i++) {
      const quantity = ticketData[`category${i + 1}`];
      const categoryProfit = quantity * this.prices[i];

      totalProfit += categoryProfit;
      categoryProfits.push(categoryProfit);
    }

    return { totalProfit, categoryProfits };
  }
}
