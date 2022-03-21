import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeStatusComponent } from './components/pacient/change-status/change-status.component';
import { CreateComponent } from './components/pacient/create/create.component';
import { UpdateComponent } from './components/pacient/update/update.component';
import { HomeComponent } from './components/view/home/home.component';
import { PacientsCrudComponent } from './components/view/pacients-crud/pacients-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pacients",
    component: PacientsCrudComponent
  },
  {
    path: "pacients/create",
    component: CreateComponent
  },
  {
    path: "pacients/update/:id",
    component: UpdateComponent
  },
  {
    path: "pacients/change/:id",
    component: ChangeStatusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
