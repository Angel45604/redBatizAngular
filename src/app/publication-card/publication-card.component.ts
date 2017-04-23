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