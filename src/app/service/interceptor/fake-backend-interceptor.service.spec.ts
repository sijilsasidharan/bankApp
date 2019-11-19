import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './fake-backend-interceptor.service';

describe('FakeBackendInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [FakeBackendInterceptor]
  }));

  it('should be created', () => {
    const service: FakeBackendInterceptor = TestBed.get(FakeBackendInterceptor);
    expect(service).toBeTruthy();
  });
});
