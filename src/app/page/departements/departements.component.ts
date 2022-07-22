import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../models/UrlApi";
import {HttpClientService} from "../../service/http-client.service";
import {Departement} from "../../models/Departement";

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  departementApiRequest: Departement[] | undefined;

  constructor(private _httpService: HttpClientService) {
  }

  ngOnInit(): void {
    this.getDepartements();
  }

  getDepartements(url: string = UrlApi.urlDepartement): void {
    this._httpService.getRequest<Departement[]>(url).subscribe((jsonResponse) => {
      this.departementApiRequest = jsonResponse;
    })

  }
}
