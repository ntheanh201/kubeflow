import { PodDefault } from 'src/app/types';
import { VariablesGroup } from 'kubeflow';

export interface EnvironmentVariablesGroup extends VariablesGroup {
  name: string;
  chipsList?: any[];
  configuration?: PodDefault;
}
