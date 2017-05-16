﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PublicationCard } from '../publication-card/Model/publication-card';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
     constructor (private http: Http) {}
     private commentsmdUrl = 'http://localhost:3000/TasksMd';  
     private commentsUrl='http://localhost:3000/Tasks';   

     getComments() : Observable<Comment[]>{
         return this.http.get(this.commentsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }

     addComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.commentsmdUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}