<<<<<<< HEAD
=======

>>>>>>> 07f27f2608511267011f9c248c8b9e247047a7de
import { Component,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {CommentService} from '../services/publishCard.service';
import { EmitterService } from '../services/emmiter.service';

@Component({
    selector: 'publication-card-component',
    templateUrl: 'publication-card.component.html',
    styleUrls: ['publication-card.component.css']
})
export class PublicationCard{

    constructor(
        private commentService: CommentService
        ){}
    // Define input properties
    @Input() comment: Comment;
    @Input() publicator:string;
    @Input() publicationDate:string;
    @Input() publicationText:string;
}