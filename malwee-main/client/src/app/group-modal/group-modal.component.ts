import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {
  descricao : string = '';
  grupos : Array<any> =[]; 
  
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  public async add (){
    await this.httpService.post('grupo', this.descricao);
  }

  public delete(){

  }
}
