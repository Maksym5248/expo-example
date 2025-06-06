import React, { useEffect, useState } from 'react';

import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';

import { useStyles } from './flicking-grid.style';
import { type IFlickingGridProps, type ISquare } from './flicking-grid.type';

const Square = ({ index, squareSize, gridGap, color, maxOpacity, flickerChance }: ISquare) => {
    const sharedOpacity = useSharedValue(1);

    useEffect(() => {
        if (Math.random() < flickerChance) {
            sharedOpacity.value = withRepeat(withTiming(Math.random() * maxOpacity, { duration: 500 }), -1, true);
        }
    }, [sharedOpacity, flickerChance, maxOpacity]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: sharedOpacity.value,
        backgroundColor: color,
        width: squareSize,
        height: squareSize,
        margin: gridGap / 2,
    }));

    return <Animated.View key={index} style={animatedStyle} />;
};

export const FlickeringGrid = ({
    style,
    squareSize = 4,
    gridGap = 6,
    color = '#6B7280',
    maxOpacity = 0.5,
    flickerChance = 0.1,
}: IFlickingGridProps) => {
    const s = useStyles();
    const [layout, setLayout] = useState({ width: 0, height: 0 });

    const onLayout = (event: any) => {
        const { width, height } = event.nativeEvent.layout;
        setLayout({ width, height });
    };

    const numColumns = Math.floor(layout.width / (squareSize + gridGap));
    const numRows = Math.floor(layout.height / (squareSize + gridGap));

    return (
        <Animated.View style={[s.grid, style]} onLayout={onLayout}>
            {Array.from({ length: numColumns * numRows }).map((_, index) => (
                <Square
                    key={index}
                    index={index}
                    squareSize={squareSize}
                    gridGap={gridGap}
                    color={color}
                    maxOpacity={maxOpacity}
                    flickerChance={flickerChance}
                />
            ))}
        </Animated.View>
    );
};
