import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-high-score-list',
  templateUrl: './high-score-list.component.html',
  styleUrls: ['./high-score-list.component.css']
})
export class HighScoreListComponent implements OnInit {
  userList: User[];
  orderedUserList: User[];
  constructor(private http: HttpClient) {
      this.userList = [];
      this.orderedUserList = [];
   }

  ngOnInit(): void {
      this.fetchUsers()
  }

  onProductsFetch(){
    this.fetchUsers()
  }
  organizeData(){
    this.orderedUserList = this.userList.sort(function(b, a) {
      return a.score - b.score
    });
    console.log(this.orderedUserList);
  }
  private fetchUsers() {
    window.fetch('http://localhost:8080/user').then(function (response) {
      response.json().then(function (data){
          console.log(data);
           let rawUser = data;
           for(let i=0; i < rawUser.length; i++){
             let users = new User(rawUser[i].name, rawUser[i].score);
             this.userList.push(users);
         }
         this.organizeData();
      }.bind(this));
    }.bind(this));
    console.log(this.userList);
}
}

