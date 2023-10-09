import { z } from 'zod';

export const maintenanceSchema = z.object({
  id: z.string(),
  title: z.string(),
  car: z.string(),
  label: z.string(),
  workshop: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  serviceCost: z.number(),
  notes: z.string(),
  priority: z.string(),
  serviceStatus: z.string(), 
});