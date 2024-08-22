import { memo } from 'react';
import styled from 'styled-components';
import Text from '../Text';

/**
 * 학습지 문제수가 없을 때 보여지는 컴포넌트
 */
const WorksheetEditListNodata = () => {
  return (
    <SWorksheetEditListNodata>
      <Text
        variant='body1_16_bold'
        color='#ffffff'
        $padding='17px 0px 16px 16px'
        $position='absolute'
        $top={0}
        $left={0}
      >
        학습지 상세 편집
      </Text>
      <Text
        variant='body2_14_regular'
        color='#ffffff'
        $width='274px'
        $textAlign='center'
      >
        학습지 문제수가 없습니다.
        <br />
        다음단계로 넘어가기 위해 문제를 추가해주세요.
      </Text>
      <Text
        variant='body1_16_bold'
        color='#FD5354'
        $padding='0px 24px 20px 0px'
        $position='absolute'
        $bottom={0}
        $right={0}
      >
        문제 수 0 개
      </Text>
    </SWorksheetEditListNodata>
  );
};

export const SWorksheetEditList = styled.div`
  background-color: #5c5c5c;
  width: 480px;
  height: 100%;
  border-radius: 12px;

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 480px;
  }

  @media (min-width: 1280px) {
    width: 712px;
  }
`;

const SWorksheetEditListNodata = styled(SWorksheetEditList)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default memo(WorksheetEditListNodata);
