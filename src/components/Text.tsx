import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import typography from '../typogrphy';
import { CSSProperties } from '../type';
import { convertPropsToCss } from '../utill';

export type TextVaraint = keyof typeof typography;

export interface TextProps extends CSSProperties {
  variant: TextVaraint;
  /** 텍스트 내용 */
  children: ReactNode | ReactNode[];
  /** 자동 줄바꿈(=영역을 벗어날 경우) 금지(overflow hidden에 대한 여부) */
  isNoWrap?: boolean;
  color?: string;
}

const Text = ({
  variant,
  color = '#333333',
  children,
  isNoWrap = true,
  ...props
}: TextProps) => {
  return (
    <TextBox variant={variant} color={color} $isNoWrap={isNoWrap} {...props}>
      {children}
    </TextBox>
  );
};

const TextBox = styled.div<
  TextProps & {
    $isNoWrap: boolean;
  }
>`
  ${({ variant, color, $isNoWrap, ...props }) => css`
    ${typography[variant]}
    color: ${color};
    ${$isNoWrap
      ? css`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `
      : css`
          word-break: keep-all;
          word-wrap: break-word;
        `}
    ${convertPropsToCss(props)}
  `}
`;

export default Text;
