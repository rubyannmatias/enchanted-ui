import React from 'react';
import { AccordionDetailsProps } from '../Accordion/AccordionDetails';
export interface PreviewAccordionDetailsProps extends AccordionDetailsProps {
    hascheckbox?: boolean;
    hasicon?: boolean;
    hasavatar?: boolean;
}
declare const PreviewAccordionDetails: {
    ({ ...props }: PreviewAccordionDetailsProps): React.JSX.Element;
    defaultProps: {
        hascheckbox: boolean;
        hasicon: boolean;
        hasavatar: boolean;
    };
};
export default PreviewAccordionDetails;
