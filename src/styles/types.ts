import { type IStyle } from 'react-native-theme-mk';

export type IPalette =
    | 'black03'
    | 'black01'
    | 'whiteFF'
    | 'whiteFA'
    | 'whiteF6'
    | 'whiteDD'
    | 'whiteFA10'
    | 'whiteFA15'
    | 'whiteFA60'
    | 'grey95'
    | 'grey62'
    | 'green4D'
    | 'grey14'
    | 'green26'
    | 'red'
    | 'transparent';

export type IColor =
    | 'logo'
    | 'primary'
    | 'text'
    | 'textSecondary'
    | 'textButton'
    | 'background'
    | 'ripple'
    | 'disabled'
    | 'error'
    | 'transparent'
    | 'placeholder'
    | 'card'
    | 'border'
    | 'input';

export interface IThemeTextStyle {
    color: string;
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
}

export type IShadow =
    | {
          shadowColor: string;
          shadowOffset: {
              width: number;
              height: number;
          };
          shadowRadius: number;
          shadowOpacity: number;
          elevation?: undefined;
      }
    | {
          elevation: number;
          shadowColor?: undefined;
          shadowOffset?: undefined;
          shadowRadius?: undefined;
          shadowOpacity?: undefined;
      }
    | undefined;

export type ITextStyleType = 'h1' | 'h2' | 'body' | 'bodyXS' | 'bodyS' | 'labelL' | 'labelM' | 'monoS';

export interface IBaseThemeSchema {
    radius: Record<'M' | 'L' | 'S', number>;
    colors: Record<IColor, string>;
    fonts: Record<'heading' | 'regular' | 'mono', string>;
    lineHeight: Record<'XXL' | 'XL' | 'L', number>;
    spacing: Record<'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'XXS', number>;
    fontSize: Record<'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS', number>;
}

export type ITextStyle = Record<ITextStyleType, IThemeTextStyle>;
export type IElementStyle = Record<'header' | 'input' | 'button', IStyle>;
export type IPaletteStyle = Record<IPalette, string>;
export type IShadowStyle = Record<'light' | 'none', IShadow>;

export interface IThemeSchema extends IBaseThemeSchema {
    palette: IPaletteStyle;
    element: IElementStyle;
    text: ITextStyle;
}
