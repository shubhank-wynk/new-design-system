import styled, { css } from 'styled-components';

const textTransform = (Tcase?: string) => {
    switch (Tcase) {
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
const fontWeight = (weight?: string) => {
    switch (weight) {
        case 'ligth':
        return css`font-weight:300;`;
        case 'regular':
        return css`font-weight:400;`;
        case 'extaBold':
            return css `font-weight:800;`;
        default:
            return css`font-weight:600;`;
    }
}
const fontStyle = (style?: string) => {
    switch (style) {
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
