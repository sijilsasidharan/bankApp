import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor.service';
import { AuthenticationService } from '../authentication.service';
import { LoaderService } from '../loader.service'

describe('JwtInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AuthenticationService, LoaderService, JwtInterceptor]
  }));

  it('should be created', () => {
    const service: JwtInterceptor = TestBed.get(JwtInterceptor);
    expect(service).toBeTruthy();
  });
});
