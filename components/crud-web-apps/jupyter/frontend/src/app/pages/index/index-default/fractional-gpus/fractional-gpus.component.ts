import { Component } from '@angular/core';
import { TableColumnComponent } from 'kubeflow/lib/resource-table/component-value/component-value.component';

@Component({
  selector: 'app-fractional-gpus',
  templateUrl: './fractional-gpus.component.html',
})
export class FractionalGpusComponent implements TableColumnComponent {
  public _element: any;
  public formattedValue: string;

  set element(element: any) {
    this._element = element;
    this.formattedValue = this.getFormattedValue();
  }

  getFormattedValue(): string {
    const gpus = this._element.gpus?.fractional_gpus;

    if (!Array.isArray(gpus) || gpus.length === 0) {
      return '-';
    }

    return gpus.map(gpu => `${gpu.type}/${gpu.value}`).join(', ');
  }
} 