import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit {
  empleados: any[] = [];
  items: Observable<unknown[]>;
  dispositivos: any;

  constructor(private _DeviceService:DevicesService,
    private toastr: ToastrService) {
    
   }

  ngOnInit(): void {

    this.getDevices()
  }
getDevices(){
  this._DeviceService.getDevices().subscribe(data => {
    this.dispositivos=[];
   data.forEach((element : any) => {

    /*console.log(element.payload.doc.id)*/

    this.dispositivos.push(
      {
        id:element.payload.doc.id,
        ...element.payload.doc.data()
      }
    )
    
   });
   console.log(this.dispositivos);

  });

}
eliminarDispositivo(id: string){
this._DeviceService.eliminarDispositivo(id).then(() => {
  console.log('Dispositivo Eliminado con exito');
  this.toastr.error('El Dispositivo fue eliminado con exito', 'Registro con exito!',{
    positionClass:'toast-bottom-right'
  })
}).catch(error => {

  console.log(error);
})

}
}

