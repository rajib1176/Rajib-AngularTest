import { User } from "./User";

export class Booking{
    
    constructor(public id:number=0,public name:string="",user:User,purpose:String="",participants:number){
        
    }
}