import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './frame/shared/header/header.component';
import { FooterComponent } from './frame/shared/footer/footer.component';
import { SearchComponent } from './frame/shared/search/search.component';
import { MoviesComponent } from './frame/movies/movies.component';
import { NewsComponent } from './frame/news/news.component';
import { WeatherComponent } from './frame/weather/weather.component';
import { ResturantComponent } from './frame/resturant/resturant.component';
import { ResturantListComponent } from './frame/resturant/resturant-list/resturant-list.component';
import { WeatherListComponent } from './frame/weather/weather-list/weather-list.component';
import { NewsListComponent } from './frame/news/news-list/news-list.component';
import { MoviesListComponent } from './frame/movies/movies-list/movies-list.component';


const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MoviesComponent,
    NewsComponent,
    WeatherComponent,
    ResturantComponent,
    ResturantListComponent,
    WeatherListComponent,
    NewsListComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
