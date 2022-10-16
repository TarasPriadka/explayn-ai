import {
    Github,
    Mastodon,
    Reddit,
    Twitter,
} from "@styled-icons/boxicons-logos";
import Link from "next/link";
import styled from "styled-components";
import RevoltLogo from "../../../assets/logo/revolt-logo.svg";

const FooterContainer = styled.nav`
    width: 100vw;
    padding: 3rem 0;
`;

const FooterFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: space-between;
    width: 90vw;
    margin: auto;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const RevoltLogoContainer = styled.img`
    height: 25px;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const LinkContainerHeader = styled.h4`
    margin: 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primary};
    font-weight: 700;
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        gap: 4rem;
        flex-direction: row;
    }
`;

const BrandBox = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const BrandJustify = styled.div`
    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        margin-right: auto;
    }
`;

const Socials = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 1rem;
`;

const NavLink = styled.a`
    font-weight: 400;
`;

const NavName = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterFlex>
                <BrandBox>
                    <BrandJustify>
                        <Link href="/" passHref>
                            <a>
                            <NavName>Explain AI</NavName> 
                            </a>
                        </Link>
                    </BrandJustify>
                    
                </BrandBox>
            </FooterFlex>
        </FooterContainer>
    );
};

export default Footer;
