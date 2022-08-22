declare type convertDateTypes = 'long' | 'month' | 'day' | undefined;
declare const convertDate: (time: string, format?: convertDateTypes) => string;
export default convertDate;
