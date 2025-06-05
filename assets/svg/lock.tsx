import React from 'react';

import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line import/no-default-export
export default function Lock({
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
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0002 1.66666C7.69898 1.66666 5.8335 3.53214 5.8335 5.83332V7.49999H3.3335V18.3333H16.6668V7.49999H14.1668V5.83332C14.1668 3.53214 12.3013 1.66666 10.0002 1.66666ZM12.5002 7.49999V5.83332C12.5002 4.45261 11.3809 3.33332 10.0002 3.33332C8.61945 3.33332 7.50016 4.45261 7.50016 5.83332V7.49999H12.5002ZM10.8335 10.8333V15H9.16683V10.8333H10.8335Z"
                fill={fill}
            />
        </Svg>
    );
}
