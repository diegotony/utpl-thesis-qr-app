import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavextrasService {

  constructor() { }
  extras: any;

  public setExtras(data){
    this.extras = data;
  }

  public getExtras(){
    return this.extras;
  }
}
