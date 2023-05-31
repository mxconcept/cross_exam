import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  ticketForm!: FormGroup;
  ticketService: TicketService;
  ticketData: any;
  totalProfit: number | undefined;
  categoryProfits: number[] | undefined;

  @Output() ticketDataSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, ticketService: TicketService) {
    this.ticketService = ticketService;
  }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      category1: ['', [Validators.required, Validators.min(0)]],
      category2: ['', [Validators.required, Validators.min(0)]],
      category3: ['', [Validators.required, Validators.min(0)]],
      category4: ['', [Validators.required, Validators.min(0)]],
      category5: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketData = this.ticketForm.value;
      const { totalProfit, categoryProfits } = this.ticketService.calculateProfits(this.ticketData);
      this.totalProfit = totalProfit;
      this.categoryProfits = categoryProfits;
      this.ticketDataSubmitted.emit({ ticketData: this.ticketData, totalProfit, categoryProfits });
    } else {
      console.log('Invalid form');
    }
  }
}
