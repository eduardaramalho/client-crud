import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import {MatDialog} from '@angular/material/dialog';
import { GroupModalComponent } from '../group-modal/group-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  grupos : Array<any> =[]; 
  descricao : string = '';

  constructor(private httpService : HttpService, public dialog: MatDialog, private question: QuestionService) { }

  ngOnInit(): void {
    this.list()
  }

  public async list(){
    this.grupos = await this.httpService.get('grupo');
  }

  public openModal(){
    const dialog = this.dialog.open(GroupModalComponent, {
      width: '450px'
    });

    dialog.afterClosed().subscribe((result : any) => {
      this.list();
    })
  }

  public openModalEdit(grupo : any){
    const dialog = this.dialog.open(EditModalComponent, {
      width: '450px',
      data : grupo
    });

    dialog.afterClosed().subscribe((result : any) => {
      this.list();
    })
  }

   
   public async deleteGrupo(id : number){
    
        this.question.ask(async () => {
          await this.httpService.patch('grupo', {id});
          this.list();    
        })
  }    
}
