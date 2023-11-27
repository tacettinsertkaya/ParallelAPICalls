import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-paralell',
  templateUrl: './paralell.component.html',
  styleUrls: ['./paralell.component.scss']
})
export class ParalellComponent {
  userData: any;
  cartData: any;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.getData()
  }


  getData() {
    forkJoin({
      postData: this.http.get(`${environment.BASE_URL}/users/1`),
      userDate: this.http.get(`${environment.BASE_URL}/users/1/carts`)
    }).subscribe({
      next: (data: any) => {
        this.userData = data;
        this.cartData = data;
        console.log('User Data', data)
      },
      error: (err: any) => {
        console.error('Error in User API call', err);
      }
    });
  }
}
