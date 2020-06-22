import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAsistenciaAlumnosComponent } from './lista-asistencia-alumnos.component';

describe('ListaAsistenciaAlumnosComponent', () => {
  let component: ListaAsistenciaAlumnosComponent;
  let fixture: ComponentFixture<ListaAsistenciaAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAsistenciaAlumnosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAsistenciaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
