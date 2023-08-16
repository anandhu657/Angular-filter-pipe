import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users:IUser[] = [];
  searchText:string = ''

  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getAllUser()
    .subscribe(
      (res:IUser[])=>{
        this.users = res
      }
    ),
    (err:HttpErrorResponse)=>{
      console.log(err)
    }
  }
}
