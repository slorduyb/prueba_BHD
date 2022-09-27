import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'my-products',
        loadChildren: () => import('../my-products/my-products.module').then( m => m.MyProductsPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('../transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('../requests/requests.module').then( m => m.RequestsPageModule)
      }
    ]
  }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
