import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-sequential',
  templateUrl: './sequential.component.html',
  styleUrls: ['./sequential.component.scss']
})
export class SequentialComponent {
  userData: any;
  cartData: any;


  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get(`${environment.BASE_URL}/users/1`)
      .subscribe(
        {
          next: (data: any) => {
            this.userData = data;
            console.log('User Data', data)
            this.getUserCart(data.id);
          },
          error: (err: any) => {
            console.error('Error in User API call', err);
          }
        });
  }


  getUserCart(userId: number) {
    this.http.get(`${environment.BASE_URL}/users/${userId}/carts`)
      .subscribe(
        {
          next: (data: any) => {
            this.cartData = data;
            console.log('Cart Data', data)

          },
          error: (err: any) => {
            console.error('Error in Cart API call', err);
          }
        });

  }
}
