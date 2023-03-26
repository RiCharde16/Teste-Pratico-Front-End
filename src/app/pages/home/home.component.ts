import { Component, OnInit } from '@angular/core';

// Models
import { postModel } from 'src/app/models/postModel'

// Service
import { BlogserviceService } from "src/app/services/blogservice.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  postsModel: postModel | any
  commentsModel: any[] = []
  
  constructor(private service:BlogserviceService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }


  getAllPosts(){
    this.service.getAllPosts().subscribe(
      (resp)=>{
        this.postsModel = resp

        for(let x = 1; x <= this.postsModel.length; x++){
          this.service.getCommentsByPostId(x).subscribe(
            (resp)=>{
              // console.log(x)
              this.commentsModel.splice(x, 0, resp)
            })
          }
          // console.log(this.commentsModel) 
      }
    )
    // 
  }

  ngAfterContentInit(): void {
    // console.log("Depois do init")
    console.log(this.postsModel)
  }

  clickPostEvent(postId:number){
    let post = document.getElementById((postId-1).toString()) as HTMLElement 

    if(post.style.display == "flex"){
      post.style.display = "none"
    }
    else{
      post.style.display = "flex"
    }
  }
}
