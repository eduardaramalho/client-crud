import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import {MatDialog} from '@angular/material/dialog';
import { ObjectUtils } from '../../utils/ObjectUtils';
import { SubgroupModalComponent } from '../subgroup-modal/subgroup-modal.component';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
  subgrupo     : Array<any> =[]; 
  originalList : Array<any> =[]; 
  filterTerm : string = '';

  constructor(private httpService : HttpService, public dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.list();
  }

  public async list(){    
    this.subgrupo = await this.httpService.get('subgrupo');
  }

  public filterInput(){
    ObjectUtils.filterArray(this.subgrupo, this.originalList, this.filterTerm, 'descricao');
  }

  public openModal(){
    const dialog = this.dialog.open(SubgroupModalComponent, {
      width: '450px'
    });

    dialog.afterClosed().subscribe((result : any) => {
      this.list();
    })
  }

}
