import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-imovel',
  templateUrl: './cadastrar-imovel.component.html',
  styleUrls: ['./cadastrar-imovel.component.css']
})
export class CadastrarImovelComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  alert() {
    window.alert('IMOVEL CADASTRADO COM SUCESSO!!')
  }
}
