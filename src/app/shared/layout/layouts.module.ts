import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {WrapperComponent} from './wrapper/wrapper.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, WrapperComponent, FooterComponent],
    imports: [RouterModule, CommonModule],
  exports: [ HeaderComponent, WrapperComponent],
})
export class LayoutsModule {
}
