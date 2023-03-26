import { Component, OnInit } from '@angular/core';

// Service
import { BlogserviceService } from "src/app/services/blogservice.service"

// Model
import { postModel } from "src/app/models/postModel"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postModel: postModel | any

  constructor(private service:BlogserviceService) {  }
  ngOnInit(): void {}

}
