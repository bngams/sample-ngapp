import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [TruncatePipe],
  imports: [
    MaterialModule,
    ApiModule
  ],
  exports: [
    MaterialModule,
    ApiModule,
    TruncatePipe
  ]
})
export class SharedModule { }
