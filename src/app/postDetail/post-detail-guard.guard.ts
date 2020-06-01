import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailGuardGuard implements CanActivate {
constructor( private router : Router ) {

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var id = +next.url[1].path;
      console.log("guard id: ", id);
      if( isNaN(id) || id < 1) {
        alert("Invalid post id");
        this.router.navigate(['/posts']);
      }
      return true;
  }
  
}
