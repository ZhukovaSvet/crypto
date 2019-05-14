import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoughtCardComponent } from './bought-card.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('BoughtCardComponent', () => {
    let component: BoughtCardComponent;
    let fixture: ComponentFixture<BoughtCardComponent>;

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
                declarations: [BoughtCardComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BoughtCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
