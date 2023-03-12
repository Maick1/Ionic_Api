import { Component, OnInit } from '@angular/core';

//Vamos a realizar una peteicion http hacia page.html
//en otro como vue, react se debe instalar externos, angular
//ofrece HttpClient 
import {HttpClient} from '@angular/common/http'

// dar logica y hacer el llamado http
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})

export class UserslistPage implements OnInit {

  characters:any[]=[]

  // instanciar clases
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
   // Hacer peticion get 
   this.http.get<any>('https://rickandmortyapi.com/api/character')
    
   // mostar respuesta obtenida
   .subscribe(res=>{
     //console.log(res);
     this.characters = res.results;
   })
  
  }

}