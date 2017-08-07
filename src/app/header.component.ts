import { Component } from '@angular/core';
import { ClientDto } from './clientDto.component';
import { InfraDto } from './InfraDto.component';

@Component({
    selector:'header',
    templateUrl: './header.component.html'
})
export class Header {
    infraIds=[new InfraDto('web1','Web1'),new InfraDto('aws','Aws')];
    clientIds=[new ClientDto('arena','Arena'),new ClientDto('usab','Usab'),
    new ClientDto('wwe','WWE'),
    new ClientDto('eurosport','Eurosport')];
    selectClientId:String;
    selectedInfraId:string;

    onChangeInfra(selectedInfraId) {
    this.selectedInfraId=selectedInfraId;
     console.log("selectedClientId:::"+selectedInfraId);
    }

    onChangeClient(selectedClientId) {
    this.selectClientId=selectedClientId;
    console.log("selectedClientId:::"+selectedClientId);
    }
/**
 * name
 */
public getSelectedInfraId():String {
    return this.selectedInfraId;
}

public getSelectedClientId():String {
    return this.selectClientId;
}
}