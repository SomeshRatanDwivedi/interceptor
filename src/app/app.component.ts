import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc';
  
  constructor( private http: HttpClient ){}
  onSubmit(userInfo:any){
    const data={
      "email":userInfo.email,
      "password":userInfo.password
    }
    this.http.post('https://reqres.in/api/login', data).subscribe((res:any)=>{
      console.log("called")
      if(res && res.token){
        localStorage.setItem('mytoken', res.token);
      }
    },
    error=>{
      console.log("err", error);
    })
  }
  showToken(){
      console.log(localStorage.getItem("mytoken"))
  }
}
