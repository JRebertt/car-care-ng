export type Maintenance = {
  id:  string;
  title: string;
  car: string;
  label: "paymented" | "negotiating" | "installments";
  workshop: string;
  startDate: Date;
  endDate: Date;
  serviceCost: number;
  notes: string;
  priority: "medium" | "low" | "high";
  serviceStatus: "in progress" | "completed" | "pending" | "canceled";
}