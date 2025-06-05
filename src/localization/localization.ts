import { EventEmitter } from 'events';

import { I18n, type TranslateOptions } from 'i18n-js';

const translations = {
    en: require('./translations/en.json'),
};

export interface ILocalizationData {
    locale: 'uk' | 'en';
}

const fallback = {
    isRTL: false,
    languageTag: 'uk',
};

enum LOCALIZATION_EVENTS {
    ON_CHANGE = 'ON_CHANGE',
}

const eventEmitter = new EventEmitter();

interface ILocalization {
    t: (key: string, options?: TranslateOptions) => string;
}

class LocalizationClass implements ILocalization {
    i18n = new I18n(translations, {
        defaultLocale: fallback.languageTag,
    });

    get data(): Readonly<ILocalizationData> {
        return {
            locale: this.i18n.locale as 'uk' | 'en',
        };
    }

    t(key: string, options?: TranslateOptions): string {
        return this.i18n.translate(key, options) ?? '';
    }

    onChange = (callBack: (value: ILocalizationData, shouldSave: boolean) => void) => {
        eventEmitter.on(LOCALIZATION_EVENTS.ON_CHANGE, callBack);

        return () => eventEmitter.removeListener(LOCALIZATION_EVENTS.ON_CHANGE, callBack);
    };

    removeAllListeners() {
        eventEmitter.removeAllListeners();
    }
}

export const Localization = new LocalizationClass();
