export interface KpiOverview {
    header?:string;
    data?:number | string;
    percent?:number;
    footer?:string;
    footerData?:number | string;
    disable?:number | string;
  }

export interface KpiSummary {
    size?:string;
    data?:number | string;
  }