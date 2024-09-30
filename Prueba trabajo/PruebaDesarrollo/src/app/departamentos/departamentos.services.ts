import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { departamento } from './departamentos';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService{

  ULR_API: string = environment.API_REST;

  constructor(private http:HttpClient) { }

  listarDepartamento():Observable<departamento[]>{
    return this.http.get<departamento[]>(this.ULR_API + '/api/departamentos').pipe(map(resp=>resp));
    
  }

}
