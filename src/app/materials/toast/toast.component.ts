import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  message: string = 'I am Toast';
  actionButtonLabel: string = '确定';
  action: boolean= false;
  setAutoHide: boolean = true;
  durationHide: number = 10000;
  addExtraClass:boolean = false;

  constructor(
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  showSimpleToast() {
    let config = new MdSnackBarConfig();
    config.duration = this.durationHide;
    this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }

  showActionToast() {
    this.snackBar.open(this.message,  this.actionButtonLabel);
  }

  showAlert() {
  }

}
