import { Component, OnInit } from '@angular/core';
import { departamento } from './departamentos';
import { DepartamentoService } from './departamentos.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})

export class DepartamentosComponent implements OnInit{


  departamentos:departamento[] = [];

  isUpdate: boolean = false;

  constructor(private Departamentoservice:DepartamentoService, private router:Router){  }

  ngOnInit(): void {
    this.listarDepartamento();

}

listarDepartamento(){
      this.Departamentoservice.listarDepartamento().subscribe(data =>{console.log(data)})
      this.Departamentoservice.listarDepartamento().subscribe(data =>{
        if(data){
          this.departamentos = data
        }
        
    });
}

/*
borrarGenero(id: any){
this.Departamentoservice.borrarDepartamento(id).subscribe(resp=>{
  if(resp){
    this.listarDepartamento();
  }
});
}

actualizargenero(){
  this.Departamentoservice.editarDepartamento(this.formGenero.value).subscribe(data=>{
    if(data){
      this.formGenero.reset();
      this.listarGenero();
    }
  })
}



selectItem(Item: any) {
  this.isUpdate = true;
  this.formGenero.controls['generoId'].setValue(Item.generoId);
  this.formGenero.controls['genero'].setValue(Item.genero);

}

newCard() {
  this.isUpdate = true;
}
*/
}
