import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoughtInterface } from '../../interfaces/bought.interface';

const PATTERN = Validators.pattern(/^[0-9_]*$/);

@Component({
    selector: 'app-bought-card',
    templateUrl: './bought-card.component.html',
    styleUrls: ['./bought-card.component.css']
})
export class BoughtCardComponent implements OnInit {
    public boughtForm: FormGroup;
    public boughtItems = [];
    public boughtSum: number;

    @Output() boughtSumChanged = new EventEmitter<number>();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.boughtForm = this.fb.group({
            buyPrice: ['', [Validators.required, PATTERN]],
            buyAmount: ['', [Validators.required, PATTERN]],
        });
    }

    public addBoughtItem(): void {
        this.boughtItems.push(this.boughtForm.value);
        this.boughtForm.reset();

        this.boughtSum = this.boughtItems.reduce((previousValue: number, currentValue: BoughtInterface) => {
            return previousValue + currentValue.buyPrice * currentValue.buyAmount;
        }, 0);

        this.boughtSumChanged.emit(this.boughtSum);
    }

    public deleteBoughtItem(i): void {
        this.boughtSum -= this.boughtItems[i].buyPrice * this.boughtItems[i].buyAmount;
        this.boughtItems.splice(i, 1);
        this.boughtSumChanged.emit(this.boughtSum);
    }
}
