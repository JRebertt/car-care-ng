import { Maintenance } from "./@types/maintenance";

export const maintenanceData:Maintenance[]  = 
[
  {
    id: "728ed52f",
    title: "Troca de Pneu",
    car: "Toyota Corolla",
    label: "negotiating",
    workshop: "Oficina Central",
    startDate: new Date(2023, 0, 5),  // 5 de Janeiro de 2023
    endDate: new Date(2023, 0, 7),    // 7 de Janeiro de 2023
    serviceCost: 250.0,
    notes: "Troca de pneus dianteiros.",
    serviceStatus: "completed",
    priority: "high"
  },
  {
    id: "623d3a52",
    title: "Troca de Óleo",
    car: "Honda Civic",
    label: "paymented",
    workshop: "Oficina Express",
    startDate: new Date(2023, 2, 15), // 15 de Março de 2023
    endDate: new Date(2023, 2, 15),   // 15 de Março de 2023
    serviceCost: 120.0,
    notes: "Troca de óleo do motor.",
    serviceStatus: "in progress",
    priority: "medium"
  },
  {
    id: "124b5c68",
    title: "Reparo no Freio",
    car: "Ford Mustang",
    label: "installments",
    workshop: "Oficina Performance",
    startDate: new Date(2023, 6, 20), // 20 de Julho de 2023
    endDate: new Date(2023, 6, 23),   // 23 de Julho de 2023
    serviceCost: 450.5,
    notes: "Reparo completo no sistema de freios.",
    serviceStatus: "pending",
    priority: "low" 
  }
]

// import { Payment } from "./components/Tables/columns";


// export const getData: Payment[] = [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ];