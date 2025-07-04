import { type NavigationContainerRef, type Route, getPathFromState } from '@react-navigation/core';
import {
    CommonActions,
    StackActions,
    type PartialState,
    type NavigationState,
    type EventListenerCallback,
    type NavigationContainerEventMap,
} from '@react-navigation/native';

export interface INavigationService {
    init: (navigatorRef: NavigationContainerRef<any>) => void;
    getPath: () => string;
    getCurrentRoute: () => Route<string> | null | undefined;
    navigate: (routeName: string, params?: object) => void;
    push: (routeName: string, params?: object) => void;
    popToTop: () => void;
    goBack: (n?: number) => void;
    reset: (state: PartialState<NavigationState>) => void;
    resetOn: (name: string, params?: object) => void;
    replace: (name: string, params?: object) => void;
    onChange: (name: keyof NavigationContainerEventMap, callBack: EventListenerCallback<NavigationContainerEventMap, any>) => () => void;
}

export class NavigationClass implements INavigationService {
    private nav: NavigationContainerRef<any> | null = null;

    constructor() {
        this.nav = null;
    }

    init = (navigatorRef: NavigationContainerRef<any> | null) => {
        this.nav = navigatorRef;
    };

    getCurrentRoute = () => {
        return this.nav ? this.nav.getCurrentRoute() : null;
    };

    getPath = () => {
        return this.nav ? getPathFromState(this.nav.getRootState()) : '';
    };

    navigate(routeName: string, params = {}): void {
        this.nav?.dispatch(CommonActions.navigate(routeName, params));
    }

    push = (routeName: string, params = {}) => {
        this.nav?.dispatch(StackActions.push(routeName, params));
    };

    popToTop = () => {
        this.nav?.dispatch(StackActions.popToTop());
    };

    goBack = (n: number = -1) => {
        for (let i = 0; i < Math.abs(n); i++) {
            this.nav?.dispatch(CommonActions.goBack());
        }
    };

    reset = (state: PartialState<NavigationState>) => {
        this.nav?.dispatch(CommonActions.reset(state));
    };

    resetOn = (name: string, params?: object) => {
        this.nav?.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name, params }],
            }),
        );
    };

    replace = (name: string, params?: object | undefined) => {
        this.nav?.dispatch(StackActions.replace(name, params));
    };

    onChange = (name: keyof NavigationContainerEventMap, callBack: EventListenerCallback<NavigationContainerEventMap, any>) => {
        this.nav?.addListener(name, callBack);

        return () => !!this.nav && this.nav.removeListener(name, callBack);
    };
}

export const Navigation = new NavigationClass();
