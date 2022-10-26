import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';


@Component({
  selector: 'app-subgroup-modal',
  templateUrl: './subgroup-modal.component.html',
  styleUrls: ['./subgroup-modal.component.scss']
})
export class SubgroupModalComponent implements OnInit {
  descricao : string = '';
  fkgrupo : string = '';

  constructor(private HttpService : HttpService) { }

  ngOnInit(): void {
  }

  async add (){
    console.log({descricao : this.descricao});
    await this.HttpService.post('subgrupo', {descricao : this.descricao, fkgrupo : this.fkgrupo});
  }

}
