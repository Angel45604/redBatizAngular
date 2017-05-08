import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import{ User } from '../models/user';
import { CommentService } from '../services/publishCard.service';
import { EmitterService } from '../services/emmiter.service';
import { PublicationCard } from '../publication-card/Model/publication-card';

@Component({
    selector: 'publicator-component',
    templateUrl: 'publicator.component.html',
    styleUrls: ['publicator.component.css'],
    providers:[CommentService]
})
export class Publicator{
    currentUser:User;
    publicationText: string;
    publicationFoto: File;
  constructor(
    private commentService:CommentService,
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  selectedGroup: string;
  selectedAssignature: string;
  private publication;
  private editing = false;
  
  groups = [
    {value: '4IM7', viewValue: '4IM7'},
    {value: '4IM8', viewValue: '4IM8'},
    {value: '4IM9', viewValue: '4IM9'}
  ];


assignatures=[
    {value:'Matematicas',viewValue:'Matematicas'},
    {value:'Dibujo',viewValue:'Dibujo'},
    {value:'Fisica',viewValue:'Fisica'}
  ];


  @Input()editId:string;
  @Input()listId:string;

  submitPublication(){
    console.log(this.selectedAssignature,this.selectedGroup);
      let commentOperation: Observable<Comment[]>;
    this.publication = new PublicationCard(this.currentUser.name,""+this.selectedGroup,""+this.selectedAssignature, this.publicationText);
    if(!this.editing){
      commentOperation = this.commentService.addComment(this.publication);
    }else{

    }

    commentOperation.subscribe(
      comments => {
        EmitterService.get(this.listId).emit(comments);
        this.publication = new PublicationCard('','','','');
        if(this.editing)this.editing = !this.editing;
      },
      err =>{
        console.log(err);
      });
  }
  


  fileEvent(fileInput: any){
    let file = fileInput.target.files[0];
    let fileName = file.name;
    console.log(fileName);
    console.log(file);
  }
}