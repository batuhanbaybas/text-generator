import styled from "styled-components";

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width || "100"}%;
    margin-left: ${props => props.marginLeft || "0"}rem;

    p {
        
        font-size: 0.9 rem;
        font-weight: 300;
        text-align: start;
    }

    `;


