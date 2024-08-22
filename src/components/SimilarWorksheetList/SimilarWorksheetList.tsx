import { memo } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import VFlexBox from '../VFlexBox';
import SimilarWorksheetListNodata, {
  SSimilarWorksheetList
} from './SimilarWorksheetListNodata';
import ProblemCard from '../ProblemCard';
import useSimilarWorksheetList from './useSimilarWorksheetList';
import { Problem } from '../../type';

export interface SimilarWorksheetListProps {
  similarProblemId: number | undefined;
  excludedProblemIds: number[] | undefined;
  isApiUpdate: boolean;
  handleChangeProblem: (Problem: Problem) => void;
  handleAddProblem: (Problem: Problem) => void;
}

const SimilarWorksheetList = ({
  similarProblemId,
  excludedProblemIds,
  isApiUpdate,
  handleChangeProblem,
  handleAddProblem
}: SimilarWorksheetListProps) => {
  const {
    similarProblemList,
    handleChangeProblemButton,
    handleAddProblemButton
  } = useSimilarWorksheetList({
    similarProblemId,
    excludedProblemIds,
    isApiUpdate,
    handleChangeProblem,
    handleAddProblem
  });

  if (!similarProblemId || similarProblemList.length === 0)
    return <SimilarWorksheetListNodata />;

  return (
    <SSimilarWorksheetList>
      <VFlexBox $width='100%' $height='100%'>
        <Text
          variant='body1_16_bold'
          color='#333333'
          $padding='17px 0px 16px 17px'
        >
          유사 문항
        </Text>
        <SProblemList>
          <VFlexBox space={16} $width='100%' $padding='0px 16px'>
            {similarProblemList?.map((item) => (
              <ProblemCard
                key={item.id}
                variant='SIMILAR'
                {...item}
                handleClick1={handleChangeProblemButton}
                handleClick2={handleAddProblemButton}
              />
            ))}
          </VFlexBox>
        </SProblemList>
      </VFlexBox>
    </SSimilarWorksheetList>
  );
};

const SProblemList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

export default memo(SimilarWorksheetList);
