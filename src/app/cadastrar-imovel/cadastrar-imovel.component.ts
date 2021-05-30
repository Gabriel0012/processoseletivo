import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-imovel',
  templateUrl: './cadastrar-imovel.component.html',
  styleUrls: ['./cadastrar-imovel.component.css']
})
export class CadastrarImovelComponent implements OnInit {

  public endereco: any = {}
  constructor() { 
    this.endereco = {cep: ''}
  }

  ngOnInit(): void {
  }

  alert() {
    window.alert('IMOVEL CADASTRADO COM SUCESSO!!')
  }

  buscaCEP() {
    window.alert(this.endereco.cep)
  }
}
