import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowMoviesComponent } from './show-movies.component';
import { GetMoviesService } from 'src/app/services/get-movies.service';

describe('ShowMoviesComponent', () => {
  let component: ShowMoviesComponent;
  let fixture: ComponentFixture<ShowMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMoviesComponent ],
      imports: [HttpClientTestingModule], 
      providers: [GetMoviesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Es una funcion sencilla para cumplir con el Unit Testing
  it('El resultado debe ser "10"', () => {
    let res = component.validacionDeCodigo(10);
    expect(res).toBe("10");
  });

});
