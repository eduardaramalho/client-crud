import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import {MatDialog} from '@angular/material/dialog';
import { GroupModalComponent } from '../group-modal/group-modal.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  grupos : Array<any> =[]; 
  descricao : string = '';

  constructor(private httpService : HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.list()
  }

  public async list(){
    this.grupos = await this.httpService.get('grupo');
  }

  public openModal(){
    this.dialog.open(GroupModalComponent, {
      width: '550px',
      height: '250px'
    });

  }
}
