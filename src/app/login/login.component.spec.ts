
/* Importación de librerias */
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LoginComponent } from './login.component';

/* Modulos usados de las librerias para la autenticación en firebase*/
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
