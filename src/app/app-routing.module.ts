import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '',     component: HomePageComponent},
    {path: 'search',    redirectTo: '/search/angular/1',  pathMatch: 'full'},
    {path:'search/:query/:pagina',    component: GitSearchComponent, 
     data:{
     title: 'Busqueda'
   }},
   {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
