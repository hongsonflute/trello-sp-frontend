import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {WrapperComponent} from './shared/layout/wrapper/wrapper.component';
import {SharedModule} from './shared/shared.module';

export const route: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      }
    ]
  },

]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
