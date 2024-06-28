import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private dataService: DataServiceService,
    private api: ApiService
  ) {}

  customer: any;

  ngOnInit() {
    this.getPelanggans()
  }

  getPelanggans() {
    this.api.getPelanggan().subscribe( (data: any) => {
      this.customer = data['data']
    })
    console.log(this.customer)
  }

}
