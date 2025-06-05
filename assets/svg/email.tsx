import React from 'react';

import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line import/no-default-export
export default function Email({
    width = 20,
    height = 20,
    fill = 'black',
    style,
}: {
    width?: number;
    height?: number;
    fill?: string;
    style?: object;
}) {
    return (
        <Svg viewBox="0 0 20 20" width={width} height={height} fill="none" style={style}>
            <Path d="M2.14916 3.33334L9.99984 9.75663L17.8505 3.33334H2.14916Z" fill={fill} />
            <Path d="M1.6665 5.09188V16.6667H18.3332V5.09188L9.99984 11.9101L1.6665 5.09188Z" fill={fill} />
        </Svg>
    );
}
