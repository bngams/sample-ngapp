import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [TruncatePipe],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TruncatePipe
  ]
})
export class SharedModule { }
