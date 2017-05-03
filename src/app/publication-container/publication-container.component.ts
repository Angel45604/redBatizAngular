import { Component,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {CommentService} from '../services/publishCard.service';
import { EmitterService } from '../services/emmiter.service';

@Component({
    selector: 'publication-container-component',
    templateUrl: 'publication-container.component.html',
    styleUrls: ['publication-container.component.css']
})

export class PublicationContainer implements OnInit, OnChanges{
    constructor(
        private commentService:CommentService
    ){}

    comments:Comment[];

    @Input() publicator: string;
    @Input() publicationDate: string;
    @Input() publicationText: string;

    loadComments(){
        this.commentService.getComments()
        .subscribe(
            comments => this.comments = comments,
            err =>{
                console.log(err);
            });
    }

    ngOnInit(){
    this.loadComments();
    }

    ngOnChanges(changes: any) {
        this.loadComments();
        EmitterService.get(this.publicator).subscribe((comments:Comment[]) => {this.comments = comments});
    }
}