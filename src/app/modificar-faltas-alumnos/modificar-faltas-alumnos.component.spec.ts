import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarFaltasAlumnosComponent } from './modificar-faltas-alumnos.component';

describe('ModificarFaltasAlumnosComponent', () => {
  let component: ModificarFaltasAlumnosComponent;
  let fixture: ComponentFixture<ModificarFaltasAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarFaltasAlumnosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarFaltasAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
