<<<<<<< HEAD
﻿import { Component,Input } from '@angular/core';
@Component({
    selector: 'publication-card-component',
    templateUrl: 'publication-card.component.html',
    styleUrls: ['publication-card.component.css']
})
export class PublicationCard{
    @Input() publicator: String;
    @Input() publicationDate: String;
    @Input() publicationImg: String = 'assets/images/isom.png';
    @Input() publicationText: String;
    nameN: String='Tache';
=======
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
>>>>>>> ed4b51c77263397732ee910093916d0830f1d4f5
}