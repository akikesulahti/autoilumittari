import { Car } from './car';

export interface AppForm {
  car: Car;
  distance: number;
  speed1: number;
  speed2: number;
  time1?: number;
  time2?: number;
  fuel1?: number;
  fuel2?: number;
  averageFuel1?: number;
  averageFuel2?: number;
}
