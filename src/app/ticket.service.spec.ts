import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total profit and category profits correctly', () => {
    const ticketData = {
      category1: 2,
      category2: 3,
      category3: 1,
      category4: 4,
      category5: 0,
    };
    const expectedTotalProfit = 2 * 20 + 3 * 40 + 1 * 100 + 4 * 150 + 0 * 300;
    const expectedCategoryProfits = [2 * 20, 3 * 40, 1 * 100, 4 * 150, 0 * 300];

    const result = service.calculateProfits(ticketData);

    expect(result.totalProfit).toBe(expectedTotalProfit);
    expect(result.categoryProfits).toEqual(expectedCategoryProfits);
  });
});
