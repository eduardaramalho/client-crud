import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {
  descricao : string = '';
  
  constructor(private httpService : HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public async add(){
    console.log({descricao : this.descricao});
    await this.httpService.post('grupo', {descricao : this.descricao});
  }
}
