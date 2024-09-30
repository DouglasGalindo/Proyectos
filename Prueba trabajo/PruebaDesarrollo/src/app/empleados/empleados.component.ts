import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmpleadoService} from './empleado.service';
import { empleados } from './empleados';
import { departamento } from '../departamentos/departamentos';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartamentoService } from '../departamentos/departamentos.services';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})


export class EmpleadosComponent  implements OnInit {

  
isUpdate:boolean = false;
empleados: empleados[] = [];
departamentos: departamento[] =  [];

formEmpleadoAgregar: FormGroup = new FormGroup({});
formEmpleado: FormGroup = new FormGroup({});

constructor(private empleadoservice: EmpleadoService, private departamentoservice:DepartamentoService,  private router:Router) { }

ngOnInit(): void {

  this.listado();
  this.listarDepartamento();
  /*this.listargenero();
  this.listarRoles();*/
  //console.log(this.usuario);
  this.formEmpleado = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    id_departamento: new FormControl('', [Validators.required]),
    nombre_cargo: new FormControl('', [Validators.required]),
    fecha_contratacion: new FormControl('', [Validators.required]),
  });

  this.formEmpleadoAgregar = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    id_departamento: new FormControl('', [Validators.required]),
    nombre_cargo: new FormControl('', [Validators.required]),
    fecha_contratacion: new FormControl('', [Validators.required]),
  });



}






listado() {
  this.empleadoservice.listarUsuarios().subscribe(data =>{console.log(data)})
  this.empleadoservice.listarUsuarios().subscribe(data =>{
    if(data) {
      this.empleados = data
    }
  });
}


listarDepartamento(){
  this.departamentoservice.listarDepartamento().subscribe(data =>{
    if(data){
      this.departamentos = data
    }
  })
}

guardarUsuario(){
  this.empleadoservice.agregarUsuarios(this.formEmpleadoAgregar.value).subscribe(data =>{
if(data){
  this.formEmpleadoAgregar.reset();
  this.listado();
}
  });
}

actualizarUsuarios(){
  this.empleadoservice.editarUsuarios(this.formEmpleado.value).subscribe(data=>{
  if(data){
    this.formEmpleado.reset();
    this.listado();
    
  }
  })
  }

  borrarUsuarios(id: any){
  this.empleadoservice.borrarUsuarios(id).subscribe(data=>{      
        this.listado();      
    })
  }





redireccionar(){
  this.router.navigate(['usuarios/form'])
}

selectedItem(Item: any){
  this.isUpdate = true;
  this.formEmpleado.controls['codigo'].setValue(Item.codigo);
  this.formEmpleado.controls['nombre'].setValue(Item.nombre);
  this.formEmpleado.controls['apellido'].setValue(Item.apellido);
  this.formEmpleado.controls['id_departamento'].setValue(Item.id_departamento);
  this.formEmpleado.controls['nombre_cargo'].setValue(Item.nombre_cargo);
  this.formEmpleado.controls['fecha_contratacion'].setValue(Item.fecha_contratacion);  
}

selectedItemAgregar(Item: any){
  
  this.formEmpleadoAgregar.controls['codigo'].setValue(Item.codigo);
  this.formEmpleadoAgregar.controls['nombre'].setValue(Item.nombre);
  this.formEmpleadoAgregar.controls['apellido'].setValue(Item.apellido);
  this.formEmpleadoAgregar.controls['id_departamento'].setValue(Item.id_departamento);
  this.formEmpleadoAgregar.controls['nombre_cargo'].setValue(Item.nombre_cargo);
  this.formEmpleadoAgregar.controls['fecha_contratacion'].setValue(Item.fecha_contratacion);  
}

newCard(){
  this.isUpdate = true;
}


}


