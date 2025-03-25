import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPage } from './agenda.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPage,
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
      },
      {
        path: 'nuevo',
        loadChildren: () => import('./nuevo-contacto/nuevo-contacto.module').then( m => m.NuevoContactoPageModule)
      }
    ]
  },
  {
    path: 'detalle-contacto',
    loadChildren: () => import('./detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPageRoutingModule {}
