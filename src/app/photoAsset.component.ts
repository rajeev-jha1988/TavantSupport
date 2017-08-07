import { Component,Input  } from '@angular/core';

import {ItemService} from './itemMigartionService.component'
import {Header} from './header.component'
@Component({
    selector:'migrationForm',
     templateUrl: './item.component.html'
    
})
export class PhotoAssetMigartion{
 isIdgenSame:boolean;
 sourceEnv:String;
 tarrgetEnv:String;
 MigrationByItemType:boolean;
 itemId:String; 
 @Input('selectClientId') selectClientId:String;
 @Input('selectedInfraId') selectedInfraId:String;
constructor(private itemService:ItemService,private header:Header){

}
migrate(itemMigartionObj: PhotoAssetMigartion): void {
    console.log("kkk::"+this.header.getSelectedClientId());
    this.selectClientId=this.header.selectClientId;
    this.selectedInfraId=this.header.selectedInfraId;
   this.itemService.StartPhotoAssetMigration(itemMigartionObj);
}
}