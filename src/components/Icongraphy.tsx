import { ReactComponent as add_circle_1 } from '../assets/add-circle-1.svg';
import { ReactComponent as add_circle } from '../assets/add-circle.svg';
import { ReactComponent as swap_horiz } from '../assets/swap_horiz.svg';
import { ReactComponent as delete_icon } from '../assets/delete.svg';
import { useMemo } from 'react';

export const IcongraphyComponents = {
  add_circle_1,
  add_circle,
  swap_horiz,
  delete_icon
};

export type IcongraphyVariants = keyof typeof IcongraphyComponents;

export interface IcongraphyProps {
  variant: IcongraphyVariants;
  size?: number;
}

const Icongraphy = ({ variant, size = 16 }: IcongraphyProps) => {
  const SvgIconComponent = useMemo(() => {
    return IcongraphyComponents[variant];
  }, [variant]);
  return <SvgIconComponent width={size} height={size} />;
};

export default Icongraphy;
