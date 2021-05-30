import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-imovel-detalhes',
  templateUrl: './imovel-detalhes.component.html',
  styleUrls: ['./imovel-detalhes.component.css']
})
export class ImovelDetalhesComponent implements OnInit {

  public imovel: any

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.imovel = {tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero 395", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior2.jpg"}
  }

  favorite() {
    let favoritas: any = this.cookie.get('Favoritas')
    let obj: any = []

    if (favoritas == '') {
      obj = [this.imovel]
    } else {
      obj = JSON.parse(favoritas)
      obj.push(this.imovel)
    }
    console.log(obj, 'obj')

    let fav = JSON.stringify(obj)
    this.cookie.set( 'Favoritas', fav );
  }
}
