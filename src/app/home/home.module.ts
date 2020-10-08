import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
export const route: Routes =[
  {
    path: '',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(route)
  ],
  exports: []
})
export class HomeModule {
}
