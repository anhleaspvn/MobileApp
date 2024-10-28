export let supportedLanguageCodes = ['en', 'it', 'fr', 'de', 'es', 'vi'];

export interface NgxConfigDate {
  code: string;
  dayMonthYear: string;
  fullDate: string;
  hoursMinutes: string;
  monthYear: string;
  year: string;
}

export interface NgxDateObjMap {
  [key: string]: NgxConfigDate;
}

export let dateConfigMap: NgxDateObjMap = {
  en: {
    code: 'en-US',
    fullDate: 'MM/dd/yyyy h:mm a',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'hh:mm a'
  },
  it: {
    code: 'it-IT',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm'
  },
  fr: {
    code: 'fr-FR',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm'
  },
  de: {
    code: 'de',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm'
  },
  es: {
    code: 'es',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm'
  }
};

export enum NgxDateFormat {
  DAY_MONTH_YEAR = 'DAY_MONTH_YEAR',
  FULL_DATE = 'FULL_DATE',
  MONTH_YEAR = 'MONTH_YEAR',
  HOURS_MINUTES = 'HOURS_MINUTES',
  YEAR = 'YEAR'
}

export let fieldConfigDate = {
  MONTH_YEAR: 'monthYear',
  YEAR: 'year',
  HOURS_MINUTES: 'hoursMinutes',
  FULL_DATE: 'fullDate',
  DAY_MONTH_YEAR: 'dayMonthYear'
}

/**
 * Enum used to set the group event logic
 */
export enum NgxTimelineEventGroup {
  YEAR = 'YEAR',
  MONTH_YEAR = 'MONTH_YEAR',
  DAY_MONTH_YEAR = 'DAY_MONTH_YEAR'
}

export let fieldsToAddEventGroup = {
  YEAR: ['getFullYear'],
  MONTH_YEAR: ['getFullYear', 'getMonth'],
  DAY_MONTH_YEAR: ['getFullYear', 'getMonth', 'getDate']
};

export let periodKeyDateFormat = {
  YEAR: NgxDateFormat.YEAR,
  MONTH_YEAR: NgxDateFormat.MONTH_YEAR,
  DAY_MONTH_YEAR: NgxDateFormat.DAY_MONTH_YEAR,
};

/**
 * Enum used to set the change side event logic
 */
export enum NgxTimelineEventChangeSideInGroup {
  ALL = 'ALL',
  ON_DIFFERENT_HMS = 'ON_DIFFERENT_HMS',
  ON_DIFFERENT_DAY = 'ON_DIFFERENT_DAY',
  ON_DIFFERENT_MONTH = 'ON_DIFFERENT_MONTH'
}

export let fieldsToCheckEventChangeSideInGroup = {
  ON_DIFFERENT_MONTH: ['getFullYear', 'getMonth'],
  ON_DIFFERENT_DAY: ['getFullYear', 'getMonth', 'getDate'],
  ON_DIFFERENT_HMS: ['getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds']
};
