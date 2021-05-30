import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading: boolean
  constructor() {
    this.loading = false;
  }

  ngOnInit(): void {
  }

  searchImoveis() {
    this.loading = true
    setTimeout(() => { this.loading = false }, 1000)
  }

}
