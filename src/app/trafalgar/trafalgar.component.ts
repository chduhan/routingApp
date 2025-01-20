import { Component } from '@angular/core';
import { AddressService } from '../address.service';
@Component({
  selector: 'app-trafalgar',
  templateUrl: './trafalgar.component.html',
  styleUrl: './trafalgar.component.css'
})
export class TrafalgarComponent {

  constructor(private address: AddressService){

  }
  campusAddress(campus : string){
    this.address.campusAddress(campus);
  }
  
}
