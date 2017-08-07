import { Component } from '@angular/core';
import {ItemService} from './itemMigartionService.component'
@Component({
    selector:'migrationForm',
     templateUrl: './item.component.html'
    
    
})
export class ItemMigration{
 isIdgenSame:boolean;
 sourceEnv:String;
 tarrgetEnv:String;
 migrationByItemType:boolean;
 itemId:String; 
 
 constructor (private itemService :ItemService){

 }


 
}