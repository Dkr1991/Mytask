import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:3000';
  private header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  // private user = {
  //   "firstName": "othe",
  //   "lastName": "asd",
  //   "email": "dsds",
  //   "phone": "sdf",
  //   "state": "sds",
  //   "country": "sdds",
  //   "address": "sdds"
  // }



  constructor(private http: HttpClient) {

    // this.createUser(this.user).subscribe(
    //   value => console.log(value),
    //   error => console.log(error),

    // )

    // this.deleteUser(2).subscribe(
    //   value => console.log(value),
    //   error => console.log(error),

    // )

    // this.getAllUsers().subscribe(
    //   value => console.log(value),
    //   error => console.log(error),

    // )


  }

  getAllUsers() {
    return this.http.get(`${this.url}/users`)
  }

  createUser(user) {
    return this.http.post(`${this.url}/users`, user, { headers: this.header })
  }
  deleteUser(id) {
    return this.http.delete(`${this.url}/users/${id}`)
  }

  // TODO json. stringify

  updateUser(id , data) {
    return this.http.put(`${this.url}/users/${id}`, data, { headers: this.header })
  }
}
