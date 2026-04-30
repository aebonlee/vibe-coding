import type { BootcampDay } from '../types';
import { week1Days } from './bootcamp/week1Data';
import { week2Days } from './bootcamp/week2Data';
import { week3Days } from './bootcamp/week3Data';
import { week4Days } from './bootcamp/week4Data';

export const bootcampDays: BootcampDay[] = [
  ...week1Days,
  ...week2Days,
  ...week3Days,
  ...week4Days,
];
