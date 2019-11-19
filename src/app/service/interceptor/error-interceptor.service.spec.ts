import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ErrorInterceptor } from './error-interceptor.service';
import { AuthenticationService } from '../authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('ErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AuthenticationService,
      ErrorInterceptor],
  }));

  it('should be created', () => {
    const service: ErrorInterceptor = TestBed.get(ErrorInterceptor);
    expect(service).toBeTruthy();
  });
});
