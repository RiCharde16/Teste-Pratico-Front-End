import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs"

// Models
import { postModel } from "src/app/models/postModel"
import { usersModel } from "src/app/models/usersModel"
import { commentsModel } from "src/app/models/commentsModel"

// Variavies de Ambiente
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  private url:string = ""

  constructor(private http:HttpClient) { 
    this.url = environment.apiBlog
  }

  getAllPosts():Observable<postModel>{
    return this.http.get<postModel>(`${this.url}/posts`)
  }

  getCommentsByPostId(idPost:number):Observable<commentsModel>{
    return this.http.get<commentsModel>(`${this.url}/post/${idPost}/comments`)
  }

  getPostById(idPost:number):Observable<postModel>{
    return this.http.get<postModel>(`${this.url}/posts/${idPost}`)
  }

  getAllUsers():Observable<usersModel>{
    return this.http.get<usersModel>(`${this.url}/users`)
  }

  getUserById(idUser:number):Observable<usersModel>{
    return this.http.get<usersModel>(`${this.url}/users/${idUser}`)
  }
}

