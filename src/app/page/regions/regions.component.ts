import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../models/UrlApi";
import {HttpClientService} from "../../service/http-client.service";
import {Region} from "../../models/Region";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regionApiRequest : Region[] | undefined;

  constructor(private _httpService : HttpClientService) { }

  ngOnInit(): void {
    this.getRegion()
  }

  getRegion(url: string = UrlApi.urlRegion) : void {
    this._httpService.getRequest<Region[]>(url).subscribe((jsonResponse) => {
      this.regionApiRequest = jsonResponse;
    })


  }

}
