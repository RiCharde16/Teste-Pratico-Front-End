import { Component, OnInit } from '@angular/core';

// Service
import { BlogserviceService } from "src/app/services/blogservice.service"

// Models
import { usersModel} from "src/app/models/usersModel"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // numPx:number = 0 
  usersModel: usersModel | any
  
  constructor(private service:BlogserviceService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.service.getAllUsers().subscribe(
      (resp)=>{
        this.usersModel = resp
      }
    )
  }
  
  showMenu(){
    let menu = document.getElementById("menu") as HTMLElement
    console.log(menu)
    menu.style.right = "0"
    // console.log(this.usersModel)
  }

  closeMenu(){
    let menu = document.getElementById("menu") as HTMLElement

    menu.style.right = "-500%"
  }
}
