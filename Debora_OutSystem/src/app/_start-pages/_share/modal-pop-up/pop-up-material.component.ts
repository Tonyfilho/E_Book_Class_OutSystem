import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal } from '../interfaces/i-modal';



// type  response = {message: String, title: string, information: string}

@Component({
  selector: 'app-pop-up-material',
  templateUrl: './pop-up-material.component.html',
  styleUrls: ['./pop-up-material.component.scss']
})
export class PopUpMaterialComponent {
 /**DialogData é o Tipo de data, em nos cossa será string */
 /**Injetaremos o Tipo de Mat_Dialog_Data */
  constructor(@Inject(MAT_DIALOG_DATA) public data : IModal) {}
}
