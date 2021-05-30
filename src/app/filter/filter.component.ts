import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

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
