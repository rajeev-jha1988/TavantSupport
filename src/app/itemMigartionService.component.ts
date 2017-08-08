import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {PhotoAssetMigartion} from "./photoAsset.component"
@Injectable()
export class ItemService{
restClientUrl:String='';

constructor(private http: Http) { }

StartPhotoAssetMigration(photoAssetMigartion:PhotoAssetMigartion):Observable<void>{
    console.log("photoAssetMigartion::"+JSON.stringify(photoAssetMigartion));
 let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.restClientUrl+"/migarte",JSON.stringify(photoAssetMigartion)
    ,{headers:headers}).map((res: Response) => {
                return;
            }).catch(this.handleError);

            return ;
};

 private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
 
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

}