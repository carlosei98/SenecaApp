import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasarListaComponent } from './pasar-lista.component';

describe('PasarListaComponent', () => {
  let component: PasarListaComponent;
  let fixture: ComponentFixture<PasarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasarListaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
