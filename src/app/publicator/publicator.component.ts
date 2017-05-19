import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
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
    filesToUpload: Array<File> = [];
    fileName:string;
    destinationFolder:string = "../assets/images/"
  constructor(
    private commentService:CommentService,
    private http: Http
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
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json(), this.fileName=files[0].name)
      .subscribe(files => console.log(this.fileName));
      console.log(this.fileName);

      if(!this.editing){
        if(this.fileName!=undefined){
          this.publication = new PublicationCard(this.currentUser.name,""+this.selectedGroup,""+this.selectedAssignature, this.publicationText, this.destinationFolder+this.fileName);
          commentOperation = this.commentService.addComment(this.publication);
        }else{
          this.publication = new PublicationCard(this.currentUser.name,""+this.selectedGroup,""+this.selectedAssignature, this.publicationText, this.destinationFolder+this.fileName);
          commentOperation = this.commentService.addComment2(this.publication);
        }
      }else{

      }

    commentOperation.subscribe(
      comments => {
        EmitterService.get(this.listId).emit(comments);
        this.publication = new PublicationCard('','','','','');
        if(this.editing)this.editing = !this.editing;
      },
      err =>{
        console.log(err);
      });
  }
  


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => this.fileName=files[0].filename)
  }


}