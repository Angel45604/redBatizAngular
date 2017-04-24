import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PublicationCard } from '../publication-card/Model/publication-card';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
     constructor (private http: Http) {}
     private commentsUrl = 'http://localhost:3000/Tasks';     

     getComments() : Observable<Comment[]>{
         return this.http.get(this.commentsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}