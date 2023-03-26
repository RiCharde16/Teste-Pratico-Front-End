import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usersModel } from 'src/app/models/usersModel';

// Service
import {BlogserviceService} from "src/app/services/blogservice.service"

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, AfterViewChecked{
  private idUser:string = '0'
  userModel: usersModel | any

  constructor(private route:ActivatedRoute, private service:BlogserviceService) { }

  ngAfterViewChecked(): void {
    if(this.userModel?.id != parseInt(this.idUser)){
      this.serviceApi()
    } 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.idUser = value.get('id') as string
    )
    this.serviceApi()
  }

  serviceApi(){
    this.service.getUserById(parseInt(this.idUser)).subscribe({
      next: (resp)=>{
        this.userModel = resp
      }
    })
  }

  mudancaSite(){
    console.log(this.userModel.name)
  }
}
