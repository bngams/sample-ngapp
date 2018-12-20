import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ApiModule } from './api/api.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TruncatePipe],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ApiModule
  ],
  exports: [
    MaterialModule,
    ApiModule,
    TruncatePipe,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
