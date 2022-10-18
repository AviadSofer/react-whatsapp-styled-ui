import styled from "styled-components";

interface Props {
    width?: string,
    flipHorizontally?: boolean
}

export const Icon = styled.img<Props>`
width: ${({ width }) => width || '7%'};
transform: ${({ flipHorizontally }) => flipHorizontally === true ? 'scaleX(-1)' : 'none'};
object-fit: cover;
`
