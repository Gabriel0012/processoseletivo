import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {

  public imoveis: any = []
  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.getFavorites()
  }

  getFavorites() {
    let favoritas: any = this.cookie.get('Favoritas')
    let obj: any = []

    if (favoritas == '') {
      obj = []
    } else {
      obj = JSON.parse(favoritas)
    }
    this.imoveis = obj
  }

}
