import styled from "styled-components";

const attributes = {
    type: "number",
    placeholder: "Enter a number of paragraphs",
}


export const Input = styled.input.attrs(attributes)`
padding: 1rem;
border: 1px solid #ccc;
border-radius: 10px;
`;

