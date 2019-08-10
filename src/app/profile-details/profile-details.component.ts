import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  closeResult: string;
  users: any;
  userform = {
    id: undefined,
    firstName: "",
    lastName: "",
    email: "",
    phone: undefined,
    state: "",
    country: "",
    address: "",
  }

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      value => {
        
        console.log(value);
        this.users = value;
      },
      error => console.log(error)
    )
  }
  open(content, user) {
debugger
    this.userform = user;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  submit(value) {
  debugger
    this.userService.updateUser(value.id, value).subscribe(
      data => {
        console.log('@@ updated successfully')
      },
      error => console.log(error)
    )
  }

}
