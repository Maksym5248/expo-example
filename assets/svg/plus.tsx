import React from 'react';

import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line import/no-default-export
export default function Plus({
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
            <Path d="M8 2.5V8M8 8V13.5M8 8H2.5M8 8H13.5" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="square" />
        </Svg>
    );
}
