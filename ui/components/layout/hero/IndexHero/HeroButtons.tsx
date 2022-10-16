import styled from "styled-components";
import URLs from "../../../../lib/urls";
import LinkButton from "../../../ui/LinkButton";

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    a button {
        width: 100%;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

interface HeroButtonsProps {
    darker?: boolean;
}

const HeroButtons = ({ darker }: HeroButtonsProps) => {

    return (
        <>
            <Buttons>
                <LinkButton
                    variant={darker ? "regular" : "regular-invert"}
                    href={"https://explain-ai-app.vercel.app/"}
                >
                    Start Building
                </LinkButton>
            </Buttons>
        </>
    );
};

export default HeroButtons;
