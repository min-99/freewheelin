import { CSSProperties } from './type';
import { Interpolation } from 'styled-components';

// props $제거하고 리턴해주는 함수
export const convertPropsToCss = (
  props: CSSProperties
): Interpolation<object> => {
  return Object.entries(props).reduce((acc, [key, value]) => {
    if (!key.startsWith('$')) return acc;
    const newKey = key.replace('$', '') as keyof Interpolation<object>;
    if (acc) Object.assign(acc, { [newKey]: value });
    return acc;
  }, {} as Interpolation<object>);
};
