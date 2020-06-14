import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { ToastController } from '@ionic/angular';
 import { NavController} from '@ionic/angular';
 import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:string="";
  public senha:string="";
  public mensagem:string="";
  
  loginUsuario(){
    this.autenticacaoService.loginNoFirebase(this.email, this.senha).then((res) =>{this.navegacao.navigateForward('app/tabs/tab1');
    
    }).catch((error)=>{
      this.mensagem = "Erro ao tentar Logar";
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

  cadastroPage(){
    this.navegacao.navigateForward('inserir')
  }

  constructor(public autenticacaoService: AutenticacaoService,
    public router:Router,
    public toastController: ToastController, private navegacao:NavController) { }

  ngOnInit() {
  }

}
