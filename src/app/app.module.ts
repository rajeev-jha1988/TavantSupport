import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Header } from './header.component';
import { ItemMigration } from './item.component';
import { photoAssetMigartion } from './photoAsset.component';
import { Report } from './report.component';
import { Verification } from './verification.component';
import { BinaryAsset } from './binaryAsset.component';
import { Nav } from './nav.component';

const appRoutes: Routes = [
  { path: 'photoAsset', component: photoAssetMigartion},
  { path: 'item', component: ItemMigration },
  { path: 'binaryAsset', component: BinaryAsset },
  { path: 'verification', component: Verification },
  { path: 'report', component: Report }
];


@NgModule({
  declarations: [
    Header,photoAssetMigartion,ItemMigration,BinaryAsset,Verification,Report,Nav
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [],
  bootstrap: [Nav,Header]
})
export class AppModule { }
