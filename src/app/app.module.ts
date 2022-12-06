import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ImgComponent } from './img/img.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemComponent } from './item/item.component';
import { SeemorePipe } from './seemore.pipe';
import { BrowserComponent } from './browser/browser.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoreGamesComponent } from './more-games/more-games.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    NavbarComponent,
    PlatformsComponent,
    SortByComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    ImgComponent,
    NotFoundComponent,
    ItemComponent,
    SeemorePipe,
    BrowserComponent,
    GameDetailsComponent,
    MoreGamesComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
