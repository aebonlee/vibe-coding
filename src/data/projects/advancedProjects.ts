import type { ProjectData } from '../../types';
import { multiAgentProject } from './multiAgentProject';
import { mcpServerProject } from './mcpServerProject';
import { specDrivenProject } from './specDrivenProject';

export const advancedProjects: ProjectData[] = [
  multiAgentProject,
  mcpServerProject,
  specDrivenProject,
];
