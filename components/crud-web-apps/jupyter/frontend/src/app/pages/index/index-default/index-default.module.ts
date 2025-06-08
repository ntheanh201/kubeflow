import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDefaultComponent } from './index-default.component';
import { KubeflowModule } from 'kubeflow';
import { ServerTypeComponent } from './server-type/server-type.component';
import { FractionalGpusComponent } from './fractional-gpus/fractional-gpus.component';

@NgModule({
  declarations: [IndexDefaultComponent, ServerTypeComponent, FractionalGpusComponent],
  imports: [CommonModule, KubeflowModule, CommonModule],
  exports: [IndexDefaultComponent, ServerTypeComponent, FractionalGpusComponent],
})
export class IndexDefaultModule {}
