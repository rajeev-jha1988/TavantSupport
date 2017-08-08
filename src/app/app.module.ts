import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Header } from './header.component';
import { ItemMigration } from './item.component';
import { PhotoAssetMigartion } from './photoAsset.component';
import { Report } from './report.component';
import { Verification } from './verification.component';
import { BinaryAsset } from './binaryAsset.component';
import { Nav } from './nav.component';

import {ItemService} from './itemMigartionService.component'


const appRoutes: Routes = [
  { path: 'photoAsset', component: PhotoAssetMigartion},
  { path: 'item', component: ItemMigration },
  { path: 'binaryAsset', component: BinaryAsset },
  { path: 'verification', component: Verification },
  { path: 'report', component: Report }
];


@NgModule({
  declarations: [
    Header,PhotoAssetMigartion,ItemMigration,BinaryAsset,Verification,Report,Nav
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpModule
  ],
  providers: [ItemService,Header],
  bootstrap: [Nav,Header]
})
export class AppModule { }
