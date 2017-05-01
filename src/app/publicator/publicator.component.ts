import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

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

  constructor(
    private commentService:CommentService
  ){}

  selectedValue: string;
  private publication = new PublicationCard('Yio Merengues', new Date(), '');
  private editing = false;
  
  groups = [
    {value: '4IM1', viewValue: '4IM1'},
    {value: '4IM2', viewValue: '4IM2'},
    {value: '4IM3', viewValue: '4IM3'}
  ];

  @Input()editId:string;
  @Input()listId:string;

  submitPublication(){
    let commentOperation:Observable<Comment[]>;

    if(!this.editing){
      commentOperation = this.commentService.addComment(this.publication);
    }else{

    }

    commentOperation.subscribe(
      comments => {
        EmitterService.get(this.listId).emit(comments);
        this.publication = new PublicationCard('',new Date(),'');
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