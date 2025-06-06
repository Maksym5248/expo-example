import React, { useEffect, useState } from 'react';

import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS, cancelAnimation } from 'react-native-reanimated';

import { FLICKERING_COLOR, useStyles } from './flicking-grid.style';
import { type IFlickingGridProps, type ISquare } from './flicking-grid.type';

const Square = ({ index, squareSize, gridGap, color, maxOpacity, flickerChance, duration = 200 }: ISquare) => {
    const sharedOpacity = useSharedValue(1);

    const startFlickerAnimation = () => {
        if (Math.random() < flickerChance) {
            sharedOpacity.value = withTiming(Math.random() * maxOpacity, { duration: duration }, () => {
                runOnJS(startFlickerAnimation)();
            });
        } else {
            setTimeout(() => {
                runOnJS(startFlickerAnimation)();
            }, duration);
        }
    };

    useEffect(() => {
        startFlickerAnimation();

        return () => {
            cancelAnimation(sharedOpacity);
        };
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
    color = FLICKERING_COLOR,
    maxOpacity = 0.5,
    flickerChance = 0.2,
    duration = 200,
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
                    duration={duration}
                />
            ))}
        </Animated.View>
    );
};
