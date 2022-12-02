import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { ClienteDetail } from './Cliente-detail';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl: string = environment.baseUrl + 'clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClienteDetail[]>{
    return this.http.get<ClienteDetail[]>(this.apiUrl);
  }

  getCliente(id: string): Observable<ClienteDetail>{
    return this.http.get<ClienteDetail>(this.apiUrl+'/'+id)
  }

}
