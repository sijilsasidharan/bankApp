import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'syg-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css']
})
export class CustomSnackbarComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
