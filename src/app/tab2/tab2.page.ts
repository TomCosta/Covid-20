import { Component } from '@angular/core';
import{CovidService} from '../apicorona/covid.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[CovidService]
})
export class Tab2Page {

  constructor( public CovidService:CovidService) {}

  public lista_corona = new Array <any>();

  ionViewDidEnter(){
   this.listaCorona()
  }



  listaCorona(){
    this.CovidService.getCorona().subscribe(
      data => {
        const response = (data as any);
        
        this.lista_corona = response.data;
        console.log(this.lista_corona);
      },
      error=>{
  
      }
    )
  }

}
