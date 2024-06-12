import React from 'react';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { Components, Theme } from '@mui/material';
/**
 * @typedef LinkProps
 * @type {object}
 * @property {string} disabled - If `true`, the component is disabled.
 */
export type LinkProps = MuiLinkProps & {
    disabled?: boolean;
};
/**
 * Override out of the box styling from mui to align with designer theme
 * @returns override Link component styles and prop
 */
export declare const getMuiLinkThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const Link: {
    ({ ...props }: LinkProps): React.JSX.Element;
    defaultProps: {
        disabled: boolean;
    };
};
export default Link;
