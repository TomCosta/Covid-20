import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController:AlertController,private navegacao:NavController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Coronavírus',
      subHeader: 'versão 1.0',
      message: '<strong> API: </strong> https://covid19-brazil-api.now.sh/api/report/v1 <br> <br> <strong> Desenvolvido por Ericka Gomez.</strong>',
  
      buttons: ['OK']
    });
  
    await alert.present();
  }


  voltar(){
    this.navegacao.navigateForward('')
  }
}
