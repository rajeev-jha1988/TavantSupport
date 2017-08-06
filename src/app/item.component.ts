import { Component } from '@angular/core';

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
}