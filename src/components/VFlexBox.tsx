import React, { memo } from 'react';
import styled from 'styled-components';
import { CSSProperties } from '../type';
import type { Properties } from 'csstype';
import { convertPropsToCss } from '../utill';

export interface VFlexBoxProps extends CSSProperties {
  /** 자식 요소의 간격 */
  space?: number | Properties['justifyContent'];
  /** 자식요소 */
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * 가로로 정렬하는 FlexBox
 * @param param0
 * @returns
 */
const VFlexBox = ({
  children,
  space,
  $justifyContent = 'center',
  ...props
}: VFlexBoxProps) => {
  return (
    <StyledBaseStack
      {...props}
      $space={space}
      $justifyContent={$justifyContent}
    >
      {children}
    </StyledBaseStack>
  );
};

const StyledBaseStack = styled.div<
  CSSProperties & {
    $space?: number | Properties['justifyContent'];
  }
>`
  display: flex;
  flex-direction: column;
  ${({ $space }) =>
    $space && typeof $space !== 'number' && `justify-content: ${$space};`}
  ${({ $justifyContent }) =>
    $justifyContent && `justify-content: ${$justifyContent};`}
    > *:not(:last-child) {
    ${({ $space }) =>
      $space && typeof $space === 'number' && `margin-bottom: ${$space}px;`}
  }
  ${(props) => convertPropsToCss(props)}
`;

export default memo(VFlexBox);
