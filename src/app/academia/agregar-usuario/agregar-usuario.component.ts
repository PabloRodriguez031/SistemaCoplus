import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ApiService } from 'app/servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'app/servicios/notifications.service';

declare const $: any;

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  lideresAcademia:any = [];
  usuariosAcademia :any = [];

  documentos :any = []; 
  coleccion = 'usuario';

  documentos2 :any = []; 
  coleccion2 = 'academia';

  lideresRed :any = []; 
  usuariosRed :any = []; 

  lider :any = [];

  documentoId;


  constructor(private apiService: ApiService, private route: ActivatedRoute, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.documentoId = this.route.snapshot.params['id'];
    this.apiService.getDocumentoById(this.coleccion2, this.documentoId).then(academia => {
      this.documentos2 = {
        id: academia.id,
        data: academia.data()
      };
    });

    if(this.lideresRed){
      this.lideresRed = this.filtrarUsuarios(this.lideresRed, 'lideresIds');
    }
    if(this.usuariosRed){
      this.usuariosRed = this.filtrarUsuarios(this.usuariosRed, 'estudiantesIds');
    }



    firebase.firestore().collection(this.coleccion).where('liderAcademiaId', '==', this.documentoId).
    where('graduado', '==', 'Si').onSnapshot((snapshot) => {
      this.lideresAcademia = [] as any;
      snapshot.forEach(lideresAcademia => {
          this.lideresAcademia.push({
              id: lideresAcademia.id,
              data: lideresAcademia.data()
          });
        });
    });

    firebase.firestore().collection(this.coleccion).where('estudiantesIds', '==', this.documentoId).
    where('graduado', '==', 'No').onSnapshot((snapshot) => {
      this.usuariosAcademia = [] as any;
      snapshot.forEach(usuariosAcademia => {
          this.usuariosAcademia.push({
              id: usuariosAcademia.id,
              data: usuariosAcademia.data()
          });
        });
    });
  }

  openForm() {
    firebase.firestore().collection('usuario').where('graduado', '==', 'Si').
    where('red', '==', this.documentos2.data['red']).onSnapshot((snapshot) => {
      this.lideresRed = [] as any;
      snapshot.forEach(doc => {
          this.lideresRed.push({
              id: doc.id,
              data: doc.data()
          });
        });
        this.lideresRed = this.filtrarUsuarios(this.lideresRed, 'lideresIds');
        $('#formModal').modal('toggle');
    });  
  }

  agregarLider(id){      
    this.notificationsService.showConfirmationSwal().then(resultado => {
      if(resultado.value){
        this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
        if(!this.documentos2.data['lideresIds']){
          this.documentos2.data['lideresIds'] = [];
        }
        this.documentos2.data['lideresIds'].push(id);
        this.apiService.updateDocumento(this.coleccion2, { 
          lideresIds: this.documentos2.data['lideresIds']
        }, this.documentoId).then(respuesta => {

          this.lideresRed.splice(this.lideresRed.findIndex(lider => {
            return lider.id === id;
          }),1);

          this.notificationsService.showSwal('Editado', 'El lider ha sido agregado con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })

        this.apiService.updateDocumento(this.coleccion, { 
          liderAcademiaId: this.documentos2.id
        }, id).then(respuesta => {
          this.usuariosRed.splice(this.usuariosRed.findIndex(discipulo => {
            return discipulo.id === id;
          }),1);
          
          this.notificationsService.showSwal('Editado', 'El lider ha sido agregado con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })

      }
    });
  }

  deleteLider(id){
    this.notificationsService.showConfirmationSwal().then(resultado => {
      if(resultado.value){

        this.apiService.updateDocumento(this.coleccion, { 
          liderAcademiaId: ''
        }, id).then(respuesta => {
          this.usuariosRed.splice(this.usuariosRed.findIndex(discipulo => {
            return discipulo.id === id;
          }),1);
          
          this.notificationsService.showSwal('Editado', 'El lider ha sido eliminado con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })

      }
    });
  }

  
  filtrarUsuarios(usuarios, campo){



    const usuariosfiltrados = [];    
    usuarios.forEach(usuario => {
      let existe = false;
      this.documentos2.data[campo].forEach(discipulo =>{
        if(usuario.id === discipulo){
          existe = true;
        }
      });      
      if(existe === false){
        usuariosfiltrados.push(usuario);
      }
    });

    console.log(usuarios);
    return usuariosfiltrados;

  }


  openForm2() {
    firebase.firestore().collection('usuario').where('red', '==', this.documentos2.data['red']).
    onSnapshot((snapshot) => {
      this.usuariosRed = [] as any;
      snapshot.forEach(doc => {
          this.usuariosRed.push({
              id: doc.id,
              data: doc.data()
          });
        });
        this.filtrarUsuarios(this.usuariosRed, 'estudiantesIds');
        $('#formModal2').modal('toggle');
    });
  }

  agregarUsuario(id){
    this.notificationsService.showConfirmationSwal().then(resultado => {
      if(resultado.value){
        this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');

        if(!this.documentos2.data['estudiantesIds']){
          this.documentos2.data['estudiantesIds'] = [];
        }        
        this.documentos2.data['estudiantesIds'].push(id);
        this.apiService.updateDocumento(this.coleccion2, { 
          estudiantesIds: this.documentos2.data['estudiantesIds']
        }, this.documentoId).then(respuesta => {
          this.usuariosRed.splice(this.usuariosRed.findIndex(discipulo => {
            return discipulo.id === id;
          }),1);
          
          this.notificationsService.showSwal('Editado', 'El usuario ha sido agregado con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })
        
        this.apiService.updateDocumento(this.coleccion, { 
          estudiantesIds: this.documentos2.id
        }, id).then(respuesta => {
          this.usuariosRed.splice(this.usuariosRed.findIndex(discipulo => {
            return discipulo.id === id;
          }),1);
          
          this.notificationsService.showSwal('Editado', 'El usuario ha sido agregado con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })
      }
    });
  }

  deleteUsuario(id){
    this.notificationsService.showConfirmationSwal().then(resultado => {
      if(resultado.value){
        
        this.apiService.updateDocumento(this.coleccion, { 
          estudiantesIds: ''
        }, id).then(respuesta => {
          this.usuariosRed.splice(this.usuariosRed.findIndex(discipulo => {
            return discipulo.id === id;
          }),1);
          
          this.notificationsService.showSwal('Editado', 'El lider ha sido eliminado con éxito', 'success');
        }).catch(error => {
          console.log(error);
          this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        })

      }
    });
  }

}