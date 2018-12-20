import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TruncatePipe],
  imports: [
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    TruncatePipe
  ]
})
export class SharedModule { }
