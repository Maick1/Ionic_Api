import { Component, OnInit } from '@angular/core';

//import q sirvepara dar la informacion de la api
import {ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  //Variables donde se guardara la id
  profileId!: string ;
  character:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    //extraer la id de la api
    //console.log(id);
    this.profileId = (this.activatedRoute.snapshot.paramMap.get('id')as string)
    this.http.get('https://rickandmortyapi.com/api/character/'+this.profileId)
    .subscribe(res=> this.character = res);
  }

}
