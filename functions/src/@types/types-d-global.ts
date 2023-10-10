export interface Maintenance {
  Title: string;
  Car: string;
  Workshop: string;
  startDate: Date;
  endDate: Date;
  serviceCost: number;
  note: string;
  serviceStatus: string;
}

export interface Workshop {
  Name: string;
  Mechanic: string;
  location?: string;
}
export interface Car {
  licensePlate: string;
  year: number;
  chassi: string;
  renavam: string;
  expirationDate: Date;
  model: string;
  driver: string;
}
export interface Driver {
  name: string;
  age: number;
  joinedCompany: Date;
}
export interface Part {
  Name: string;
  Value: number;
  Store: string;
  PaymentMethod: string;
  status: string;
}
