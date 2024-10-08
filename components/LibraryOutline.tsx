import * as React from 'react';
import { ColorValue } from 'react-native';
import { useTheme } from 'react-native-paper';
import Svg, { Path, SvgProps } from 'react-native-svg';

type LibraryBooksOutlineProps = {
  size?: number;
  color?: string | ColorValue;
} & SvgProps;

const LibraryBooksOutlineIcon: React.FC<LibraryBooksOutlineProps> = ({
  size = 24,
  color,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path
        d="M10 14H14V12H10V14ZM10 11H18V9H10V11ZM10 8H18V6H10V8ZM8 18C7.45 18 6.97933 17.8043 6.588 17.413C6.19667 17.0217 6.00067 16.5507 6 16V4C6 3.45 6.196 2.97933 6.588 2.588C6.98 2.19667 7.45067 2.00067 8 2H20C20.55 2 21.021 2.196 21.413 2.588C21.805 2.98 22.0007 3.45067 22 4V16C22 16.55 21.8043 17.021 21.413 17.413C21.0217 17.805 20.5507 18.0007 20 18H8ZM8 16H20V4H8V16ZM4 22C3.45 22 2.97933 21.8043 2.588 21.413C2.19667 21.0217 2.00067 20.5507 2 20V6H4V20H18V22H4Z"
        fill={color || theme.colors.onSurface}
      />
    </Svg>
  );
};

export default LibraryBooksOutlineIcon;
