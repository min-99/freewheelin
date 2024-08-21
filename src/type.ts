import { CSSProperties as OriginalCSSProperties } from 'react';

export type CSSProperties = {
  [K in keyof OriginalCSSProperties as `$${K & string}`]: OriginalCSSProperties[K];
};

export const EASY = 1; // 하
export const LOWER_MEDIUM = 2; // 중하
export const MEDIUM = 3; // 중
export const UPPER_MEDIUM = 4; // 상
export const HARD = 5; // 최상

export type Level =
  | typeof EASY
  | typeof LOWER_MEDIUM
  | typeof MEDIUM
  | typeof UPPER_MEDIUM
  | typeof HARD;

export const OBJECTIVE = 1; // 객관식
export const SUBJECTIVE = 2; // 주관식

export type ProblemType = typeof OBJECTIVE | typeof SUBJECTIVE;

export interface Problem {
  id: number;
  level: Level;
  type: ProblemType;
  problemImageUrl: string;
  title: string;
  answerRate: number;
}
