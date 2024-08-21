import React from 'react';
import styled from 'styled-components';
import { CSSProperties } from '../type';
import type { Properties } from 'csstype';
import { convertPropsToCss } from '../utill';

export interface HFlexBoxProps extends CSSProperties {
  /** 자식 요소의 간격 */
  space?: number | Properties['justifyContent'];
  /** 자식요소 */
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * 세로 정렬하는 FlexBox
 * @param param0
 * @returns
 */
const HFlexBox = ({
  children,
  $alignItems = 'center',
  ...props
}: HFlexBoxProps) => {
  return (
    <StyledBaseStack {...props} $alignItems={$alignItems}>
      {children}
    </StyledBaseStack>
  );
};

const StyledBaseStack = styled.div<HFlexBoxProps>`
  display: flex;
  flex-direction: row;
  ${({ space }) =>
    space && typeof space !== 'number' && `justify-content: ${space};`}
  ${({ $alignItems }) => $alignItems && `align-items: ${$alignItems};`}
    > *:not(:last-child) {
    ${({ space }) =>
      space && typeof space === 'number' && `margin-right: ${space}px;`}
  }
  ${(props) => convertPropsToCss(props)}
`;

export default HFlexBox;
