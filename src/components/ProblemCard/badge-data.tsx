import {
  EASY,
  HARD,
  Level,
  LOWER_MEDIUM,
  MEDIUM,
  OBJECTIVE,
  ProblemType,
  SUBJECTIVE,
  UPPER_MEDIUM
} from '../../type';

export const levelData: Record<Level, { textColor: string; label: string }> = {
  [EASY]: {
    textColor: '#5c5c5c',
    label: '하'
  },
  [LOWER_MEDIUM]: {
    textColor: '#00abff',
    label: '중하'
  },
  [MEDIUM]: {
    textColor: '#54c0b1',
    label: '중'
  },
  [UPPER_MEDIUM]: {
    textColor: '#ffc64d',
    label: '상'
  },
  [HARD]: {
    textColor: '#FD5354',
    label: '최상'
  }
};

export const problemTypeData: Record<
  ProblemType,
  { textColor: string; label: string }
> = {
  [OBJECTIVE]: {
    textColor: '#959595',
    label: '객관식'
  },
  [SUBJECTIVE]: {
    textColor: '#959595',
    label: '주관식'
  }
};
