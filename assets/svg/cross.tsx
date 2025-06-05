import React from 'react';

import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line import/no-default-export
export default function Cross({
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
            <Path
                d="M3.1665 3.16666L12.8332 12.8333M12.8332 3.16666L3.1665 12.8333"
                stroke={fill}
                strokeWidth={strokeWidth}
                strokeLinecap="square"
            />
        </Svg>
    );
}
