import { TensferConfig } from "./types";
export default class Tensfer {
  private utils;
  private config;
  private eventHandler;
  origin: string;
  private iframe;
  private onError;
  private onClose;
  private onSuccess;
  constructor();
  static linkWithOptions(props: TensferConfig): void;
  handleEvents(event: any): void;
  close(data: any): void;
  success(data: any): void;
  error(event: any): void;
}
declare global {
  interface Window {
    Tensfer: typeof Tensfer;
    closePayFrame: any;
  }
}
//# sourceMappingURL=index.d.ts.map
