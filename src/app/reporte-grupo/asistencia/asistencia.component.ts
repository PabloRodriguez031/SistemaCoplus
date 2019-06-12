import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import * as firebase from 'firebase';
import { NotificationsService } from 'app/servicios/notifications.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  usuariosDicipulado :any = [];
  coleccion = 'usuario';

  documentos2 :any = []; 
  coleccion2 = 'grupo';

  documentos :any = [];

  documentoId;
  reporteId;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.documentoId = this.route.snapshot.params['grupo'];
    this.apiService.getDocumentoById(this.coleccion2, this.documentoId).then(discipulado => {
      this.documentos2 = {
        id: discipulado.id,
        data: discipulado.data()
      };
    });

    firebase.firestore().collection(this.coleccion).where('grupoId', '==', this.documentoId).onSnapshot((snapshot) => {
      this.usuariosDicipulado = [] as any;
      snapshot.forEach(doc => {
          this.usuariosDicipulado.push({
              id: doc.id,
              data: doc.data()
          });
        });
    });

    this.reporteId = this.route.snapshot.params['id'];
    this.apiService.getDocumentoById('reporte_grupo', this.reporteId).then(reporte => {
      this.documentos = {
        id: reporte.id,
        data: reporte.data()
      };
    });
  }
  
  marcarAsistencia(id) {  
    this.notificationsService.showConfirmationSwal().then(resultado => {
      if(resultado.value){
        this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');

        const indice = this.documentos2.data['gruposIds'].findIndex(estudiante =>{
          return estudiante.id === id;
        })

        if(!this.documentos2.data['gruposIds'][indice]['asistencias']){
          this.documentos2.data['gruposIds'][indice]['asistencias'] = []
        }                

        this.documentos2.data['gruposIds'][indice]['asistencias'].push({
          id: id,
          fecha: this.documentos.data['fecha'],
          reporte: this.documentos.id
        });

        this.apiService.updateDocumento('grupo', { 
          gruposIds: this.documentos2.data['gruposIds']
        }, this.documentoId).then(respuesta => {        
          this.notificationsService.showSwal('Editado', 'La asistencia ha sido ingresada con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })

      }
    });
  }


}
