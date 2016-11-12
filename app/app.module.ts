//Angular
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { ProductModule } from './products/product.module';
//Components
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';



@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
