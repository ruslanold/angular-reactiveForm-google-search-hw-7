import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Search } from './pipes/search.pipe';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchPagePipe } from './pipes/search-page.pipe';
import { SearchAdvancedComponent } from './components/search-advanced/search-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    Search,
    SearchComponent,
    SearchPageComponent,
    SearchPagePipe,
    SearchAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
