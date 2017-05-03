import { Component} from '@angular/core';

@Component({
    selector: 'NotFound',
    template:`
            <div class="container">
        <div class="section">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="card-panel white hoverable">
                        <div class="card-image waves-effect waves-block waves-light center-align">
                            <img id="work" class="activator center-align" src="../../assets/images/WorkinProgress.png" width="500px">
                        </div>
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <a routerLink="/"><button md-raised-button>Go Home</button></a>
    </div>
            `
})

export class Page404{

}