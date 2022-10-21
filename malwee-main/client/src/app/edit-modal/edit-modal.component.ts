import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  grupoEditado : string = '';
  descricaoEditada : string = '';
  
  constructor(private httpService : HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public async change(){
    await this.httpService.put('grupo', {descricao : this.descricaoEditada, id: this.grupoEditado});
    console.log("Editou")
  }

  public cancel(){
    this.dialog.closeAll();
  }
}
