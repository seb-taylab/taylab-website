
import { Question, ArchetypeDescription } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a difficult decision, I typically...",
    virtueCategory: 'sage'
  },
  {
    id: 2,
    text: "In group projects, I naturally...",
    virtueCategory: 'diplomat'
  },
  {
    id: 3,
    text: "When I see a problem that needs solving, I...",
    virtueCategory: 'pioneer'
  },
  {
    id: 4,
    text: "I feel most fulfilled when I've...",
    virtueCategory: 'sage'
  },
  {
    id: 5,
    text: "When someone disagrees with me, I...",
    virtueCategory: 'diplomat'
  },
  {
    id: 6,
    text: "When starting something new, I...",
    virtueCategory: 'pioneer'
  },
  {
    id: 7,
    text: "I gain respect from others mostly through my...",
    virtueCategory: 'sage'
  },
  {
    id: 8,
    text: "In conflict situations, I tend to...",
    virtueCategory: 'diplomat'
  },
  {
    id: 9,
    text: "My approach to goals is...",
    virtueCategory: 'pioneer'
  },
];

export const archetypeDescriptions: Record<string, ArchetypeDescription> = {
  'The Sage': {
    description: 'You excel in personal mastery, with strengths in self-discipline, reflection, and integrity. Your leadership is marked by wisdom and principled decision-making.',
    virtues: ['Integrity 诚', 'Discipline 律', 'Growth 进'],
    careers: 'Coaches, Teachers, Philosophers, Mentors'
  },
  'The Diplomat': {
    description: 'You excel in interpersonal harmony, with strengths in empathy, respect, and collaboration. Your leadership brings people together and builds consensus.',
    virtues: ['Empathy 仁', 'Respect 敬', 'Collaboration 和'],
    careers: 'Community Builders, Mediators, Team Leaders, Counselors'
  },
  'The Pioneer': {
    description: 'You excel in enterprise impact, with strengths in courage, responsibility, and initiative. Your leadership drives innovation and creates meaningful change.',
    virtues: ['Courage 勇', 'Responsibility 责', 'Initiative 创'],
    careers: 'Founders, Activists, Innovators, Entrepreneurs'
  }
};
