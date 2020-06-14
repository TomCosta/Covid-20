import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AutenticacaoService} from 'src/app/usuario/autenticacao.service';
import { ToastController } from  '@ionic/angular';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.page.html',
  styleUrls: ['./inserir.page.scss'],
})
export class InserirPage implements OnInit {

 public email:string="";
public senha:string="";
public mensagem:string="";

constructor(public autenticacaoService: AutenticacaoService,public router:Router, public toastController: ToastController,private navegacao:NavController) { }

  ngOnInit() {
  }


insereUsuario(){
  this.autenticacaoService.insereNofireBase(this.email, this.senha).then((res) =>{this.navegacao.navigateForward('');
  alert(" cadastrado Realizado")
    
  }).catch((error)=>{
    this.mensagem = "Erro ao incluir usuario";
    this.exibeMensagem();
  })
}

async exibeMensagem(){
  const toast = await this.toastController.create({
    message: this.mensagem,
    duration: 2000
  });
  toast.present();
}

loginPAge(){
  this.navegacao.navigateForward('')
}
  
}
