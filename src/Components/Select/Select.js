import styled from "styled-components";

export const Select = styled.select`
    padding: 1rem 0;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    width: ${props => props.width || "100"}%;


    option {
    font-size: 1rem;
    text-align: center;
    

    }
`;

