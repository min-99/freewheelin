import { EASY, HARD, LOWER_MEDIUM, MEDIUM, UPPER_MEDIUM } from '../../type';
import { useCallback, useMemo } from 'react';
import { WorksheetEditListProps } from './WorksheetEditList';

const useWorksheetEditList = ({
  problemList,
  handleSetSimilarProblemId,
  handleRemoveSimilarProblemId,
  handleRemoveProblem
}: Omit<WorksheetEditListProps, 'similarProblemId'>) => {
  // Event Handler
  const handleClickSimilarButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.currentTarget.dataset;
      if (id) {
        handleSetSimilarProblemId(Number(id));
      }
    },
    [handleSetSimilarProblemId]
  );
  const handleClickRemoveButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.currentTarget.dataset;
      if (id) {
        handleRemoveSimilarProblemId(Number(id));
        handleRemoveProblem(Number(id));
      }
    },
    [handleRemoveSimilarProblemId, handleRemoveProblem]
  );

  // level별 개수계산
  const count = useMemo(() => {
    if (!problemList) return;
    const count = problemList.reduce(
      (acc, cur) => {
        if (cur.level === EASY) {
          acc.EASY++;
        } else if (cur.level === LOWER_MEDIUM) {
          acc.LOWER_MEDIUM++;
        } else if (cur.level === MEDIUM) {
          acc.MEDIUM++;
        } else if (cur.level === UPPER_MEDIUM) {
          acc.UPPER_MEDIUM++;
        } else if (cur.level === HARD) {
          acc.HARD++;
        }
        acc.total++;
        return acc;
      },
      {
        EASY: 0,
        LOWER_MEDIUM: 0,
        MEDIUM: 0,
        UPPER_MEDIUM: 0,
        HARD: 0,
        total: 0
      }
    );
    return count;
  }, [problemList]);

  return {
    count,
    problemList,
    handleClickSimilarButton,
    handleClickRemoveButton
  };
};

export default useWorksheetEditList;
