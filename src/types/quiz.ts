
export interface Question {
  id: number;
  text: string;
  virtueCategory: 'sage' | 'diplomat' | 'pioneer';
}

export interface QuizResultsType {
  sage: number;
  diplomat: number;
  pioneer: number;
  primaryArchetype: string;
}

export interface ArchetypeDescription {
  description: string;
  virtues: string[];
  careers: string;
}
