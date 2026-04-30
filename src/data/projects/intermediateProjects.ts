import type { ProjectData } from '../../types';
import { fullstackCrudProject } from './fullstackCrudProject';
import { apiDashboardProject } from './apiDashboardProject';
import { realtimeChatProject } from './realtimeChatProject';

export const intermediateProjects: ProjectData[] = [
  fullstackCrudProject,
  apiDashboardProject,
  realtimeChatProject,
];
