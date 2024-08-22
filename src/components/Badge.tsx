import { memo } from 'react';
import styled from 'styled-components';
import Text from './Text';

export interface BadgeProps {
  /** 글자 색상 */
  textColor: string;
  /** Badge 내용 */
  children: React.ReactNode;
}

const Badge = ({ textColor, children }: BadgeProps) => {
  return (
    <SBadge>
      <Text variant='caption1_12_regular' color={textColor}>
        {children}
      </Text>
    </SBadge>
  );
};

const SBadge = styled.div`
  background-color: #f5f5f5;
  width: 40px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default memo(Badge);
