import styled, { css } from 'styled-components'

const subColor = '#adb5bd';
const mainColor = 'black';

const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${subColor};
`

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;
`

export const FormInputContainer = styled.input`
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ label {
      ${shrinkLabel}
    }
`;

export const FromInputLabel = styled.label`
    color: ${subColor};
    font-size: 20px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel};
    }
`
