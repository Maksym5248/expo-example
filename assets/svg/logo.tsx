import React from 'react';

import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

// eslint-disable-next-line import/no-default-export
export default function Logo({
    width = 100,
    height = 12,
    fill = 'black',
    style,
}: {
    width?: number;
    height?: number;
    fill?: string;
    style?: object;
}) {
    return (
        <Svg viewBox="0 0 100 12" width={width} height={height} fill="none" style={style}>
            <G clipPath="url(#clip0)">
                <Path
                    d="M95.3206 0H85.9829V11.9813H95.7031C97.9829 11.9813 99.399 10.6325 99.399 8.46082V3.67164C99.399 1.84328 98.1378 0 95.3187 0L95.3206 0ZM95.8393 3.03172V9.11754H89.5482V2.84515H95.8393V3.03172Z"
                    fill={fill}
                />
                <Path
                    d="M75.336 9.12129V8.93472V7.45151V7.26495H75.5225H83.9759V4.65487H75.5225H75.336V4.46831V3.07278V2.88622H75.5225L84.4927 2.86383L84.4946 0.00375366H71.7744V11.9851H84.502V9.12129H75.5225H75.336Z"
                    fill={fill}
                />
                <Path
                    d="M64.8097 5.74998L64.9366 5.62312L70.5597 0.00744629H66.0485L61.7985 4.58394L61.7425 4.64364H61.6604H60.7966H60.6101V4.45707V0.00744629H57.0466V11.9888H60.6101V7.44774V7.26118H60.7966H61.7668H61.8507L61.9067 7.32274L66.0839 11.9888H70.6157L64.9328 5.88245L64.8097 5.74998Z"
                    fill={fill}
                />
                <Path
                    d="M11.5182 5.32466L4.00324 4.11757L3.84652 4.09145V2.6698H4.03309L9.96219 2.66794H10.1488V2.85451V3.82279H13.7346V2.62316C13.7327 0.354506 12.0517 0.0149536 11.0499 0.0149536H3.38756C1.54988 0.0149536 0.454728 0.96458 0.454728 2.556V4.4907C0.454728 5.62503 1.2495 6.39928 2.63756 6.61197L9.98271 7.77428L10.1394 7.79853V7.95712L10.1469 9.15115V9.33958H9.96033L4.03309 9.34331H3.84652V9.15674V8.12689H0.447266V9.27988C0.447266 10.097 0.727116 12 3.32227 12H10.8335C12.8185 12 13.742 11.1866 13.742 9.43846V7.68659C13.742 6.21831 12.5928 5.50562 11.5163 5.32652L11.5182 5.32466Z"
                    fill={fill}
                />
                <Path
                    d="M15.0576 3.05038H19.7498H19.9363V3.23695V11.9944H23.5016V3.23695V3.05038H23.6882H28.3841V0.0112H15.0576V3.05038Z"
                    fill={fill}
                />
                <Path
                    d="M52.1121 2.86569V4.73323H55.5673V2.81345C55.5673 1.08957 54.4013 0.0186768 52.5225 0.0186768H45.4759C43.2688 0.0186768 42.2427 1.0336 42.2427 3.21084V8.65114C42.2427 11 43.2128 12.0019 45.4871 12.0019H52.5244C55.2222 12.0019 55.5692 10.5261 55.5692 9.23882V7.2183H52.1139V8.97763V9.1642H51.9274L46.0057 9.16793H45.8192V8.98136V3.05599V2.86942H52.1158L52.1121 2.86569Z"
                    fill={fill}
                />
                <Path
                    d="M41.8699 11.9907L36.6702 0.00933838H31.4146L26.1665 11.9907H29.6646L30.5546 10.0075H37.2896L38.2131 11.9907H41.8699ZM34.4464 3.04665L36.284 7.40486H31.577L33.4146 3.04665H34.4445H34.4464Z"
                    fill={fill}
                />
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="99.4011" height="12" fill={fill} />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
