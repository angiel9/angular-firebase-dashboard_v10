import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})

export class CreateDeviceComponent implements OnInit {
  createDevice: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Dispositivo';
  ;
  constructor(private fb: FormBuilder,
    private _devicesService: DevicesService,
    private router:Router,
    private toastr: ToastrService)
  {
    this.createDevice = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccionip: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
AgregarEditarDisp(){

this.submitted = true;

if (this.createDevice.invalid) {
  return;}

  const dispositivo:any={
    nombre: this.createDevice.value.nombre,
    descripcion: this.createDevice.value.descripcion,
    direccionip: this.createDevice.value.direccionip,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()

  }
this._devicesService.agregarDispositivo(dispositivo).then(()=>{
  this.toastr.success('Dispositivo agrgado con exito','Dispositivo agregado',{positionClass:'toast-bottom-right'})
  this.router.navigate(['./list-devices'])
}).catch(error=>{
  console.log(error);
})
  }}
