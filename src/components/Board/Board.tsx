import { SimilarWorksheetList } from '..';
import './Board.css';
import styled from 'styled-components';
import WorksheetEditList from '../WorksheetEditList';
import useBoard from './useBoard';

const Board = () => {
  const {
    isLoading,
    problemList,
    similarProblemId,
    handleSetSimilarProblemId,
    handleRemoveSimilarProblemId,
    handleRemoveProblem,
    handleChangeProblem,
    handleAddProblem
  } = useBoard();

  if (isLoading) return <div>Loading...</div>;
  if (!problemList) return <div>데이터를 정상적으로 가져오지 못했습니다.</div>;

  return (
    <SBoard className='container'>
      <SimilarWorksheetList
        similarProblemId={similarProblemId.id}
        isApiUpdate={similarProblemId.isUpdate}
        excludedProblemIds={problemList
          .map((item) => item.id)
          .filter((item) => similarProblemId.id !== item)}
        handleChangeProblem={handleChangeProblem}
        handleAddProblem={handleAddProblem}
      />
      <WorksheetEditList
        problemList={problemList}
        similarProblemId={similarProblemId.id}
        handleSetSimilarProblemId={handleSetSimilarProblemId}
        handleRemoveSimilarProblemId={handleRemoveSimilarProblemId}
        handleRemoveProblem={handleRemoveProblem}
      />
    </SBoard>
  );
};

const SBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  height: 100%;
  width: 100%;
  gap: 16px;
`;

export default Board;
