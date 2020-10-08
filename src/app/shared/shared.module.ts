import {NgModule} from '@angular/core';
import {LayoutsModule} from './layout/layouts.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [LayoutsModule ],
  imports: [HttpClientModule],
})
export class SharedModule {
}
