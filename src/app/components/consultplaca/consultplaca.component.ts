import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-consultplaca',
  templateUrl: './consultplaca.component.html',
  styleUrls: ['./consultplaca.component.css']
})
export class ConsultplacaComponent implements OnInit {
Save() {
throw new Error('Method not implemented.');
}
onDateSelect($event: Date) {
throw new Error('Method not implemented.');
}
hora: any;
fecha: any;
  constructor(private appservice: AppserviceService) { }
 consulta : any;
 selectedDate = "";
 selectedhour =""
 input :string ="";
 houroptions:any;
  ngOnInit(): void {
    this.getHorasCita();
  }
  getHorasCita(){
    this.appservice.getHorasCita().subscribe({
      next: (e)=>{
       this.houroptions=e;
      }
   })
  }
  consultaPlaca(){

    let param = {
      'num_placa': this.input
    }
    this.appservice.getConsult(param).subscribe({
       next: (e)=>{
        this.consulta=e;
       }
    })
  }
  BookPlacaDate(){
    let param = {
      'num_placa' : this.input,
      'fecha_reserva': this.selectedDate,
      'hora_reserva' :this.selectedhour
    }
    this.appservice.BookDate(param).subscribe({
      next: (e)=> {
        if (e[0].value == -1) 
          window.alert("La fecha para esta placa esta reservada")
        else {
        window.alert("Creada correctamente")
        this.consultaPlaca();
      }
      }
    })
  }
  }

