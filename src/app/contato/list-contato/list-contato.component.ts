import { ToastrService } from 'ngx-toastr';
import { ContatoService } from './../contato.service';
import { Contato } from './../contato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contato',
  templateUrl: './list-contato.component.html',
  styleUrls: ['./list-contato.component.css']
})
export class ListContatoComponent implements OnInit {
  page = 1;
  listaContato: Contato[] = [];
  listaVazia: Boolean = true;
  mostrarLoader: Boolean = true;

  //DI - Depency Injection
  constructor(
    private contatoService: ContatoService,
    private toastr: ToastrService) {}


  ngOnInit(){
    let fetchData = this.contatoService.getContatoList();
    //Lambda
    fetchData.snapshotChanges().subscribe( data => {
      this.listaContato = [];
      if (data.length <= 0)
        this.listaVazia = true;
      else {
        this.listaVazia = false;
        data.forEach( (item: any) => {
          let contato = item.payload.toJSON();
          contato['$key'] = item.key;
          this.listaContato.push(contato as Contato);
        });
      }
    });
    this.mostrarLoader = false;
  }

  deleteContato(contato: Contato) {
    if (window.confirm("Tem certeza que deseja remover o contato?")){
      if (contato.$key != null) {
        this.contatoService.deleteContato(contato.$key);
        this.toastr.success(contato.nome + " removido com sucesso.");
      }
    }
  }


}
