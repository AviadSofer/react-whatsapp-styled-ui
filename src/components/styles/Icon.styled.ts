import styled from "styled-components";

interface Props {
    width?: string;
}

export const Icon = styled.img<Props>`
width: ${({ width }) => width || '7%'};
object-fit: cover;
`
