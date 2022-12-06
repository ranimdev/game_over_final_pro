import { GameDetailsComponent } from './game-details/game-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { RegisterComponent } from './register/register.component';
import { SortByComponent } from './sort-by/sort-by.component';

const routes: Routes = [
  //,canActivate:[AuthGuard]
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"all",canActivate:[AuthGuard],component:AllComponent},
  {path:"details/:id",canActivate:[AuthGuard],component:GameDetailsComponent},
  {path:"categories/:categories",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"platforms/:platform",canActivate:[AuthGuard],component:PlatformsComponent},
  {path:"sort-by/:sort_by",canActivate:[AuthGuard],component:SortByComponent},
  
  {path:"login",canActivate:[LoginGuard],component:LoginComponent},
  {path:"register",canActivate:[LoginGuard],component:RegisterComponent},

  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
