import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-save-your-score',
  templateUrl: './save-your-score.component.html',
  styleUrls: ['./save-your-score.component.css']
})
export class SaveYourScoreComponent implements OnInit {
  score: number;
  name: string;
  private usersUrl: string;
  constructor(private router: Router, private http: HttpClient) {
    this.score = history.state.data;
    this.usersUrl = 'http://localhost:8080/add';
   }

  ngOnInit(): void {
    console.log(this.score)
  }
  onUserCreate(userName: {usersName: string}){
      let newUser: User = {
        name: userName.usersName,
        score: this.score
      }
      console.log(userName)
      console.log(newUser)
      // this.http.post('https://movie-quiz-project-default-rtdb.firebaseio.com/users.json', newUser).subscribe((res) =>{
      //   console.log(res);
      // });
      this.http.post(this.usersUrl, newUser).subscribe((res) =>{
        console.log(res)
      });
      for (let i = 1; i <= 3; ++i) {
        this.setDelay(i);
      }
      this.router.navigate(["/HighScoreslist"])
  }
  setDelay(i: number) {
    setTimeout(function(){
      console.log(i);
    }, 1000);
  }
}
