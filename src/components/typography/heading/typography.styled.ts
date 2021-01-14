import { css } from 'styled-components';

const textTransform = (Fcase?: string) => {
    switch (Fcase) {
        case 'upper':
            return css`
        text-transform:uppercase;
        `;
        case 'camel':
            return css`
        text-transform:capitalize;
        `;
        default:
            return css`
              text-transform:lowercase;
            `;
    }
}
const fontWeight = (Fweight?: string) => {
    switch (Fweight) {
        case 'light':
            return css`font-weight:300;`;
        case 'regular':
            return css`font-weight:400;`;
        case 'extraBold':
            return css`font-weight:800;`;
        default:
            return css`font-weight:600;`;
    }
}
const fontStyle = (Fstyle?: string) => {
    switch (Fstyle) {
        case 'italic':
            return css`font-style:italic;`;
        default:
            return css`font-style:normal;`;
    }
}

export {
    textTransform,
    fontWeight,
    fontStyle,
}
