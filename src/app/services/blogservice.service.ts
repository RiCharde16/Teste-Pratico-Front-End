import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from "rxjs"

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

  constructor(private http:HttpClient) { }

  getAllPosts():Observable<postModel>{
    return this.http.get<postModel>(`${environment.apiBlog}/posts`)
  }

  getCommentsByPostId(idPost:number):Observable<commentsModel>{
    return this.http.get<commentsModel>(`${environment.apiBlog}/post/${idPost}/comments`)
  }

  getPostById(idPost:number):Observable<postModel>{
    return this.http.get<postModel>(`${environment.apiBlog}/posts/${idPost}`)
  }

  getAllUsers():Observable<usersModel>{
    return this.http.get<usersModel>(`${environment.apiBlog}/users`)
  }

  getUserById(idUser:number):Observable<usersModel>{
    return this.http.get<usersModel>(`${environment.apiBlog}/users/${idUser}`)
  }
}

