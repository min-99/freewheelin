import styled from 'styled-components';
import HFlexBox from '../HFlexBox';
import Text from '../Text';
import IconButton from '../IconButton';
import VFlexBox from '../VFlexBox';
import { Problem } from '../../type';
import { levelData, problemTypeData } from './badge-data';
import Badge from '../Badge';

export interface ProblemCardProps extends Problem {
  variant?: 'SIMILAR' | 'WORKSHEET';
  // 유사문제 버튼 활성화 여부 (WORKSHEET인 경우에만 동작)
  isSimilarActive?: boolean;
  // 첫번째 요소의 버튼 이벤트
  handleClick1?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // 두번째 요소의 버튼 이벤트
  handleClick2?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProblemCard = ({
  variant = 'WORKSHEET',
  id,
  title,
  level,
  answerRate,
  type,
  problemImageUrl,
  isSimilarActive,
  handleClick1,
  handleClick2
}: ProblemCardProps) => {
  return (
    <SProblemCard className={isSimilarActive ? 'active' : ''}>
      {/* ------ header start ------ */}
      <HFlexBox
        $width='100%'
        $height='44px'
        $backgroundColor='#fafafa'
        $borderRadius='12px 12px 0px 0px'
      >
        <Text variant='h5_18_bold' color='#333333' $paddingLeft='28px'>
          {id}
        </Text>
        <Text
          variant='body2_14_regular'
          color='#333333'
          $padding='1px 0px 2px 32px'
          $flex={1}
        >
          {title}
        </Text>
        {variant === 'WORKSHEET' && (
          <>
            <IconButton
              variant={isSimilarActive ? 'SIMILAR_ACTIVE' : 'SIMILAR'}
              $marginLeft='12px'
              handleClick={handleClick1}
              data-id={id}
            />
            <IconButton
              variant='REMOVE'
              $marginRight='16px'
              handleClick={handleClick2}
              data-id={id}
            />
          </>
        )}
        {variant === 'SIMILAR' && (
          <>
            <IconButton
              variant='REPLACE'
              $marginLeft='12px'
              handleClick={handleClick1}
              data-id={id}
            />
            <IconButton
              variant='ADD'
              $marginRight='16px'
              handleClick={handleClick2}
              data-id={id}
            />
          </>
        )}
      </HFlexBox>
      {/* ------ header end ------ */}
      <HFlexBox $alignItems='start'>
        <VFlexBox space={4} $padding='24px 15px 17px 16px'>
          <Badge textColor={levelData[level].textColor}>
            {levelData[level].label}
          </Badge>
          <Badge textColor='#707070'>{answerRate}%</Badge>
          <Badge textColor={problemTypeData[type].textColor}>
            {problemTypeData[type].label}
          </Badge>
        </VFlexBox>
        <div style={{ flex: 1, padding: '24px 0px' }}>
          <img src={problemImageUrl} alt='문제' style={{ maxWidth: '304px' }} />
        </div>
      </HFlexBox>
    </SProblemCard>
  );
};

const SProblemCard = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px 2px 6px 0px #00000014;

  &.active {
    border: 3px solid #00abff;
  }
`;

export default ProblemCard;
