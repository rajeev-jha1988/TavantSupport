import { Component } from '@angular/core';

@Component({
    selector:'migrationForm',
     templateUrl: './item.component.html'
    
})
export class photoAssetMigartion{
 isIdgenSame:boolean;
 sourceEnv:String;
 tarrgetEnv:String;
 MigrationByItemType:boolean;
 itemId:String; 
}