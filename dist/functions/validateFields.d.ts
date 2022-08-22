export interface fieldProps {
    [field: string]: {
        expresssion: RegExp;
        message: string;
    };
}
declare const validateField: (type: string, value: string) => string | null;
declare const validateEmail: (value: string) => string | null;
declare const validateUrl: (value: string) => string | null;
declare const validateTel: (value: string) => string | null;
export { validateEmail, validateUrl, validateTel };
export default validateField;
