import { Component } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-davis',
  templateUrl: './davis.component.html',
  styleUrl: './davis.component.css'
})
export class DavisComponent {

constructor(private address: AddressService){

}
campusAddress(campus : string){
  this.address.campusAddress(campus);
}
}
