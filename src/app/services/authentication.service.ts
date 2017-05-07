import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(login: string, password: string) {
        return this.http.post('http://localhost:13441/login', { login: login, password: password })
            .map((response: Response) => {
                 
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user) {
                   
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        return this.http.get('http://localhost:13441/logout');
    }
}