import { Component} from '@angular/core';

@Component({
    selector: 'NotFound',
    template:`
            <img src="assets/images/404.jpg" alt="PageNotFound">
            <a routerLink="/">Go Home</a>
            `
})

export class Page404{

}