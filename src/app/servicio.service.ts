import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()

export class ServicioService {

  constructor(public http: Http) { }

  traerTodasLasPersonas(){
    return this.http.get('http://nfranzeseutn.hol.es/miAPIRest/index.php/personas/')
    .toPromise()
    .then(this.extraerData)
    .catch(this.extraerError)
  }

  deletePersona(id){
    console.log("id desde els ervicio:"+id)
    console.log("http://nfranzeseutn.hol.es/miAPIRest/index.php/persona/" + id)
      return this.http.delete('http://nfranzeseutn.hol.es/miAPIRest/index.php/persona/' + id)
        .toPromise();
  }

  extraerData(res : Response){
    return res.json();
  }

  extraerError(err : Response){
    return console.log(err);
  }
}
