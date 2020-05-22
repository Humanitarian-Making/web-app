import { TextLangaugeOption } from './language';
import { Organisation } from './organisation';
import { DocumentReference } from '@angular/fire/firestore/interfaces';

interface ReadinessLevels {
  field: number;
  maker: number;
  user: number;
  tech: number;
  risk: number;
  scalability: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  categories?: string[];
  projectUrl: string;
  imageUrl: string;
  organisation: any;
}

export interface EditProject {
  id: string;
  categories?: string[];
  projectUrl: string;
  imageUrl: string;
  organisation: any;
}

export interface ProjectObject {
  id: string;
  name: TextLangaugeOption[];
  desc: TextLangaugeOption[];
  categories: string[];
  projectUrl: string;
  imageUrl: string;
  organisation: DocumentReference;
}

