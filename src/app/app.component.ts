import {Component} from '@angular/core';
import {RedeNeuralService} from "./service/rede-neural.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private redeNeuralService: RedeNeuralService) {

  }

  public textoInicial(): string {
    return 'Envie sua imagem para ser analisada pela rede';
  }

  //Evento de upload
  public myUploader(event) {
    const file = event.files[0];
    this.redeNeuralService.postRedeNeural(file).subscribe(file => {

    }, error1 => {

    })

  }
}
