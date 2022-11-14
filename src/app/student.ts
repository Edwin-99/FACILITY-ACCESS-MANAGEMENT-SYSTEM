export interface Student {
    roomCategory : string;
    roomNo: number;
    personNo: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    gender: string;
    mobileNo: number;
    fatherMobileNo: number;
    email: string;
    studentAdharCard: number;
    fatherAdharCard: number;
    currentAdress: string;
    collegeName: string;
    isStatus: boolean;
}


export interface Room{

    members:member[] ;
    number:number
 
 }


 export interface member{
name:string; 
indexNumber:string;
_id:string
 }