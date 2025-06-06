import { type TranslateOptions } from 'i18n-js';
import { object, type ObjectShape, string } from 'yup';

import { Localization } from '~/localization';

const t = (key: string, params?: TranslateOptions) => Localization.t(`errors.${key}`, params);

const password = () =>
    string()
        .required(t('invalidPassword'))
        .max(21, t('maxPasswordLength', { length: 21 }))
        .min(6, t('minPasswordLength', { length: 6 }));

const email = () => string().required(t('required')).email(t('invalidEmail')).trim(t('invalidEmail'));
const phoneCode = () => string().required('').min(6, '');

export const shape = <U extends ObjectShape>(fields: U) => object().shape(fields);

export const validation = {
    shape,
    password,
    phoneCode,
    email,
};
