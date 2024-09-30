import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleados } from './empleados';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService{

  ULR_API: string = environment.API_REST;

  constructor(private http:HttpClient) { }

  listarUsuarios():Observable<empleados[]>{
    return this.http.get<empleados[]>(this.ULR_API + 'api/empleados').pipe(map(resp=>resp));
    
  }



  agregarUsuarios(request: any):Observable<any>{
    return this.http.post<empleados>(this.ULR_API + 'api/empleados', request).pipe(map(resp=>resp));
  }

editarUsuarios(request: any):Observable<any>{
  return this.http.put<empleados>(this.ULR_API+'api/empleados/', request).pipe(map(resp=>resp));
}

borrarUsuarios(id:number):Observable<any>{
  return this.http.delete<any>(this.ULR_API+'api/empleados/'+id).pipe(map(datos=>datos));
}


}
