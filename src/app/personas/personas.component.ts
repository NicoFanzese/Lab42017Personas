import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  public listPersona;
  public nombre;

  constructor(public http: Http, public persona: ServicioService) {

  }


  //Para el SmartTable, no lo voy a usar.
  /*public settings = {
    columns: {
       id: {
         title: 'id'
       },
      nombre: {
        title: 'Nombre'
      },
      
      apellido: {
         title: 'Apellido'
      },
      dni: {
         title: 'Dni'
      },
      Sexo: {
         title: 'Sexo'
      },
      foto: {
         title: 'Foto'
      },
      update: true
    }
  };

  public data : LocalDataSource = new LocalDataSource();
  public datos:Array<any>=[];  */

  TraerDatos() {
    this.persona.traerTodasLasPersonas()
      .then(res => this.extraerDatos(res))
      .catch(this.extraerError);
    //this.CargarSmartTable();
  }

  extraerDatos(res) {
    this.listPersona = res;
    return this.listPersona;
  }

  extraerError(err) {
    console.log(err);
  }

  colorRenglon(sexo): string {
    if (sexo == "Femenino") {
      return "#FE2EF7";
    } else {
      return "#0000FF";
    }
  }

  cargarFoto(Foto) {
    //console.log(Foto);
    if ((Foto == null) || (Foto == undefined) || (Foto == "")) {
      return "pordefecto.png";
    } else {
      return Foto;
    }
  };


  mostrarCheck(check) {
    console.log(check);
  };

  eliminarPersona(id) {
    console.log(id);
    this.persona.deletePersona(id);
    this.TraerDatos();
  };

  insertPersona(nom) {
    console.log("estamos");
    alert(nom);
  };
  /*
    CargarSmartTable(){
      for (let item of this.listPersona) {
        // if (item.nombre == this.User.nombre)
        //   console.log(this.User.nombre);
  
        let miObj = { nombre : item.nombre };
          this.datos.push(miObj);
  
      }
      // this.Data = this.listPersona;
      // console.log(this.data);
      this.data.load(this.datos);
    }*/

  ngOnInit() {
  }

}
