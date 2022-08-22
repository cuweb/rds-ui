import { UblockProps } from '@components/Ublock/Ublock';
import React from 'react';
export interface LoginProps {
    title?: string;
    forgetLink?: string;
    registerLink?: string;
    onSubmit?: React.FormEventHandler;
    block?: UblockProps;
    wrapLink?: any;
}
declare const Login: React.FC<LoginProps>;
export default Login;
