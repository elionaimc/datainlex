import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  description: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any) {

        this.description = '';
    }

  ngOnInit() {
  }

}
