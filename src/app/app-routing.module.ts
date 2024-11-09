import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TableComponent } from './components/table/table.component';
const routes: Routes = [
  // cada rota é um objeto contendo o path endereço url e o nome do componente que deseja exibir na tela
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accordion',
  },
  { path: 'accordion', component: AccordionComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
