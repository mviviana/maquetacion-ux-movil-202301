import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent   {
  constructor(
		public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private router:Router
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
  navigate(route:any){
    this.dialogRef.close();
    this.router.navigate([route]);
  }
}
