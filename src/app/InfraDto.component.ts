export class InfraDto{
    public infraName:String;
    public infraId:String;
    constructor(infraId:String,infraName:String){
        this.infraId=infraId;
        this.infraName=infraName;
    }
}