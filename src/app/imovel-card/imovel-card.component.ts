import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Imovel } from '../imoveis-lista/imoveis-lista.component';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnInit {

  @Input('imovel') imovel: any;
  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    console.log(this.imovel)
  }

  favorite() {
    let favoritas: any = this.cookie.get('Favoritas')
    let obj: any = []
    this.imovel.favorita = true

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
