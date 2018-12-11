import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {

  // Variable declarations
  @ViewChild('currentTemplate') currentTemplate: any;

  /**
   * This method is called when component is loaded
   * @param dialogRef - instance of MatDialog
   * @param router - instance of Router
   */
  constructor(private dialogRef: MatDialog,
              private router: Router) {
  }

  /**
   * This method is used to open pop-up
   */
  ngOnInit() {
    this.dialogRef.open(this.currentTemplate, {
      disableClose: true,
    });
  }

  /**
   * This method is used to close all pop-ups
   */
  public closePopup() {
    /* If we do not write this line then auxiliary route url will persist
    even if we close the pop-up. So we set the modal outlet to null */
    this.router.navigate([{outlets: {modal: null}}]);
    // To close the pop up
    this.dialogRef.closeAll();
  }

  /**
   * This method is used to close the pop-up on component on destroy
   */
  ngOnDestroy() {
    this.dialogRef.closeAll();
  }

}
