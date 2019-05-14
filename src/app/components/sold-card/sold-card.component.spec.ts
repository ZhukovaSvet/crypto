import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldCardComponent } from './sold-card.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SoldCardComponent', () => {
    let component: SoldCardComponent;
    let fixture: ComponentFixture<SoldCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [
                    MatInputModule,
                    MatButtonModule,
                    MatCardModule,
                    MatIconModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: [SoldCardComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SoldCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
