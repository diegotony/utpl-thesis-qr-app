import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { NavextrasService } from './navextras.service';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private navExtrasService: NavextrasService) { }
  resolve(route: ActivatedRouteSnapshot){
    return this.navExtrasService.getExtras()
  }
}
