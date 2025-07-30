export interface GPUVendor {
  limitsKey: string;
  uiName: string;
}

export interface GPU {
  vendor?: string;
  num?: string;
  fractional?: string | number;
  fractionalMemory?: string | number;
  fractionalCores: string;
  useGpuType: string;
  noUseGpuType: string;
  useGpuUUID: string;
  gpuSchedulerPolicy: string;
  vendors?: GPUVendor[];
}
