import { memo } from 'react';
import styled from 'styled-components';
import HFlexBox from '../HFlexBox';
import Icongraphy from '../Icongraphy';
import VFlexBox from '../VFlexBox';
import Text from '../Text';

/**
 * 유사문제 리스트의 데이터가 없을 때
 */
const SimilarWorksheetListNodata = () => {
  return (
    <SSimilarWorksheetListNodata>
      <VFlexBox space={2} $alignItems='center'>
        <HFlexBox space={6}>
          <SimilarProblemButton />
          <Text variant='body2_14_regular' color='#333333'>
            버튼을 누르면
          </Text>
        </HFlexBox>
        <Text variant='body2_14_regular' color='#333333'>
          문제를 추가 또는 교체할수 있습니다.
        </Text>
      </VFlexBox>
    </SSimilarWorksheetListNodata>
  );
};

const SimilarProblemButton = () => {
  return (
    <SSimilarProblemButton>
      <Icongraphy variant='add_circle' size={10} />
      <Text variant='similar_button_label' color='#959595'>
        유사문제
      </Text>
    </SSimilarProblemButton>
  );
};

export const SSimilarWorksheetList = styled.div`
  background-color: #e8e8e8;
  width: 480px;
  height: 100%;
  border-radius: 12px;
  padding-bottom: 16px;

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 480px;
  }

  @media (min-width: 1280px) {
    width: 504px;
  }
`;

const SSimilarWorksheetListNodata = styled(SSimilarWorksheetList)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SSimilarProblemButton = styled.div`
  width: 57px;
  height: 24px;
  border-radius: 2px;
  border: 0.6px solid #e0e0e0;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;

export default memo(SimilarWorksheetListNodata);
