import { Component, OnInit } from '@angular/core';

export interface Imovel {
  ap_casa: string;
  endereco: string;
  bairro: string;
  cidade: string;
  complemento: string;
  preco: number;
  tipo: string;
  foto: string;
  favorita: boolean;
}

@Component({
  selector: 'app-imoveis-lista',
  templateUrl: './imoveis-lista.component.html',
  styleUrls: ['./imoveis-lista.component.css']
})

export class ImoveisListaComponent implements OnInit {

  public imoveis: Imovel[] = []
  constructor() {
  }

  ngOnInit(): void {
    this.getImoveis()
    console.log(this.imoveis)
  }

  getImoveis() {
    this.imoveis = [
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior.jpg" ,favorita: false},
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior2.jpg" ,favorita: false},
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior3.jpg" ,favorita: false},
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior.jpg" ,favorita: false},
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior2.jpg" ,favorita: false},
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior3.jpg" ,favorita: false},
      { tipo: "Aluguel", preco: 500, ap_casa: "Apartamento", complemento: "apto 305", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior.jpg" ,favorita: false},
      { tipo: "Comprar", preco: 750000, ap_casa: "Casa", complemento: "", endereco: "Rua dom oscar romero", bairro: "nova gameleira", cidade: "BH", foto: "../assets/imgs/interior2.jpg",favorita: false }
    ]
  }
}
