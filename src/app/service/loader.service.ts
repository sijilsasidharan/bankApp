import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderVisibilitySource = new Subject<boolean>();

  loaderVisibility = this.loaderVisibilitySource.asObservable();

  constructor() { }

  toggleLoader(loaderVisibility: boolean) {
    this.loaderVisibilitySource.next(loaderVisibility);
  }
}
