import styled from "styled-components";

interface Props {
    messageFontColor: string;
}

export const StyledMessage = styled.span<Props>`
width: 50%;
color: ${({ messageFontColor }) => messageFontColor || 'grey'};
font-size: ${({ theme }) => theme.size * 0.03 + 'vh' || '2.3vh'};
text-align: start;
align-self: center;
word-wrap: break-word;
`
