import Text from '../Text';
import VFlexBox from '../VFlexBox';
import ProblemCard from '../ProblemCard';
import WorksheetEditListNodata, {
  SWorksheetEditList
} from './WorksheetEditListNodata';
import useWorksheetEditList from './useWorksheetEditList';
import styled from 'styled-components';
import HFlexBox from '../HFlexBox';
import { GetProblemsResponse } from '../Board/useBoard';
import { memo } from 'react';

export interface WorksheetEditListProps {
  problemList: GetProblemsResponse;
  similarProblemId: number | undefined;
  handleSetSimilarProblemId: (id: number) => void;
  handleRemoveSimilarProblemId: (id: number) => void;
  handleRemoveProblem: (id: number) => void;
}

const WorksheetEditList = ({
  problemList,
  similarProblemId,
  handleSetSimilarProblemId,
  handleRemoveSimilarProblemId,
  handleRemoveProblem
}: WorksheetEditListProps) => {
  const { count, handleClickSimilarButton, handleClickRemoveButton } =
    useWorksheetEditList({
      problemList,
      handleSetSimilarProblemId,
      handleRemoveSimilarProblemId,
      handleRemoveProblem
    });

  if (problemList.length === 0) return <WorksheetEditListNodata />;

  return (
    <SWorksheetEditList>
      <VFlexBox $width='100%' $height='100%'>
        <Text
          variant='body1_16_bold'
          color='#ffffff'
          $padding='17px 0px 16px 16px'
        >
          학습지 상세 편집
        </Text>
        <SProblemList>
          <VFlexBox space={16} $width='100%' $padding='0px 16px'>
            {problemList?.map((item) => (
              <ProblemCard
                key={item.id}
                {...item}
                isSimilarActive={similarProblemId === item.id}
                handleClick1={handleClickSimilarButton}
                handleClick2={handleClickRemoveButton}
              />
            ))}
          </VFlexBox>
        </SProblemList>
        <SSWorksheetEditListFooter>
          <HFlexBox $paddingRight='24px'>
            <Text variant='footer_12_regular' color='#959595'>
              하{count?.EASY} · 중하{count?.LOWER_MEDIUM} · 중{count?.MEDIUM} ·
              상{count?.UPPER_MEDIUM} · 최상{count?.HARD}&nbsp;
            </Text>
            <Text variant='body1_16_regular' color='#ffffff'>
              | 문제 수 {count?.total} 개
            </Text>
          </HFlexBox>
        </SSWorksheetEditListFooter>
      </VFlexBox>
    </SWorksheetEditList>
  );
};

const SProblemList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const SSWorksheetEditListFooter = styled.div`
  width: 100%;
  height: 64px;
  background-color: #5c5c5c;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0px 0px 12px 12px;
`;

export default memo(WorksheetEditList);
