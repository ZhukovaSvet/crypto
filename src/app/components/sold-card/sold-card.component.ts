import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoldInterface } from '../../interfaces/sold.interface';

const PATTERN = Validators.pattern(/^[0-9_]*$/);

@Component({
    selector: 'app-sold-card',
    templateUrl: './sold-card.component.html',
    styleUrls: ['./sold-card.component.css']
})
export class SoldCardComponent implements OnInit {
    public soldForm: FormGroup;
    public soldItems = [];
    public soldSum: number;

    @Output() soldSumChanged = new EventEmitter<number>();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.soldForm = this.fb.group({
            sellPrice: ['', [Validators.required, PATTERN]],
            sellAmount: ['', [Validators.required, PATTERN]],
        });
    }

    public addSoldItem(): void {
        this.soldItems.push(this.soldForm.value);
        this.soldForm.reset();

        this.soldSum = this.soldItems.reduce((previousValue: number, currentValue: SoldInterface) => {
            return previousValue + currentValue.sellPrice * currentValue.sellAmount;
        }, 0);

        this.soldSumChanged.emit(this.soldSum);
    }

    public deleteSoldItem(i): void {
        this.soldSum -= this.soldItems[i].sellPrice * this.soldItems[i].sellAmount;
        this.soldItems.splice(i, 1);

        this.soldSumChanged.emit(this.soldSum);
    }
}
