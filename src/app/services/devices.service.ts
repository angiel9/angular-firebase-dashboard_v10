import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private firestore: AngularFirestore) { }
  agregarDispositivo(dispositivo:any):Promise<any>{
    return this.firestore.collection('dispositivos').add(dispositivo);
  }

  getDevices():Observable<any>{
    return this.firestore.collection('dispositivos',ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }
  eliminarDispositivo(id:string): Promise<any>{

    return this.firestore.collection('dispositivos').doc(id).delete();
  }

  getDevice(id:string):Observable<any>{
    return this.firestore.collection('dispositivos').doc(id).snapshotChanges();
  }

  actualizarDispositivo(id:string, data:any):Promise<any>{
  return this.firestore.collection('dispositivos').doc(id).update(data);
  }
}
