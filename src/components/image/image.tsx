import React from 'react';

import { Image as ExpoImage } from 'expo-image';
import _ from 'lodash';
import { View } from 'react-native';

import { useStyles } from './image.styles';
import { type IImageProps } from './image.types';

export function Image({ source, style, imageStyle, resizeMode = 'cover', ...props }: IImageProps) {
    const s = useStyles();

    return (
        <View style={[s.container, ...(_.isArray(style) ? style : [style])]}>
            <ExpoImage source={source} style={[s.image, imageStyle]} resizeMode={resizeMode} {...props} />
        </View>
    );
}
