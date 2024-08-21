import styled from 'styled-components';
import Icongraphy, { IcongraphyVariants } from './Icongraphy';
import HFlexBox from './HFlexBox';
import Text from './Text';
import { CSSProperties } from '../type';
import { convertPropsToCss } from '../utill';

const REPLACE = 'REPLACE';
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const SIMILAR = 'SIMILAR';
const SIMILAR_ACTIVE = 'SIMILAR_ACTIVE';

type IconButtonVariants =
  | typeof REPLACE
  | typeof ADD
  | typeof REMOVE
  | typeof SIMILAR
  | typeof SIMILAR_ACTIVE;

const IconButtonData: Record<
  IconButtonVariants,
  { icon: IcongraphyVariants; label: string; textColor: string }
> = {
  [REPLACE]: {
    icon: 'swap_horiz',
    label: '교체',
    textColor: '#959595'
  },
  [ADD]: {
    icon: 'add_circle',
    label: '추가',
    textColor: '#959595'
  },
  [REMOVE]: {
    icon: 'delete_icon',
    label: '삭제',
    textColor: '#959595'
  },
  [SIMILAR]: {
    icon: 'add_circle',
    label: '유사문제',
    textColor: '#959595'
  },
  [SIMILAR_ACTIVE]: {
    icon: 'add_circle_1',
    label: '유사문제',
    textColor: '#00ABFF'
  }
};

export interface IconButtonProps extends CSSProperties {
  variant: IconButtonVariants;
  isActive?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({ variant, handleClick, ...props }: IconButtonProps) => {
  return (
    <SIconButton
      type='button'
      variant={variant}
      onClick={handleClick}
      {...props}
    >
      <HFlexBox space={4}>
        <Icongraphy variant={IconButtonData[variant].icon} size={16} />
        <Text
          variant='caption1_12_regular'
          color={IconButtonData[variant].textColor}
        >
          {IconButtonData[variant].label}
        </Text>
      </HFlexBox>
    </SIconButton>
  );
};

const SIconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  ${(props) => convertPropsToCss(props)}
`;

export default IconButton;
