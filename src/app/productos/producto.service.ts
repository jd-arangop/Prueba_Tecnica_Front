import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { ProductoDetail } from './producto-detail';


@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private apiUrl: string = environment.baseUrl+'productos'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<ProductoDetail[]>{
    return this.http.get<ProductoDetail[]>(this.apiUrl);
  }

}
