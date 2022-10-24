import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  url = '//etec-boa-viagem-api.herokuapp.com/viagens'

  constructor(private HttpClient : HttpClient) {  }

  listarTodas(): Observable<any> {
    return this.HttpClient.get(this.url);
  }
}
