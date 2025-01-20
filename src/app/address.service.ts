import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  campusAddress(campus: string){
     
      // Hard-coded for now but updated in later exercise from a data file
      switch(campus) {
        case "davis":
          alert(`Davis Campus\n7899 McLaughlin Road\nBrampton, ON\n905-459-7533`);
          break;
        case "trafalgar" :
          alert(`Trafalgar Campus\n1430 Trafalgar Road\nOakville, ON\n905-845-9430`);
          break;
      }
    }
  
  }