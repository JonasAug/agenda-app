import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> = [];

  constructor() {
    this.pessoas.push({
      nome: 'Alexandre Montanha', endereco: 'Av. Raja Gabaglia, 4343 - Santa Lucia, Belo Horizonte - MG', cep: '30350-577', lat: -19.9679803, long: -43.9540716, email: 'alexmontanha@mobilus.com.br'
    })
  }

  addContato(nome, endereco, cep, lat, long, email){
    this.pessoas.push({nome, endereco, cep, lat, long, email});
  }
  getContatos(): Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}>{
    return this.pessoas;
  }
}
