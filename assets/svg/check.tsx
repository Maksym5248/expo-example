import React from 'react';

import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line import/no-default-export
export default function Check({
    width = 16,
    height = 16,
    fill = 'black',
    strokeWidth = 1.5,
    style,
}: {
    width?: number;
    height?: number;
    fill?: string;
    strokeWidth?: number;
    style?: object;
}) {
    return (
        <Svg viewBox="0 0 16 16" width={width} height={height} fill="none" style={style}>
            <Path d="M1.8335 10.0625L6.00016 13.5L14.1668 2.5" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="square" />
        </Svg>
    );
}
