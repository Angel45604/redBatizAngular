import { Component,Input } from '@angular/core';
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
}