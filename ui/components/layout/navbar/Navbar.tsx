import Link from "next/link";
import styled from "styled-components";
import RevoltLogo from "../../../assets/logo/logo.png";

const NavbarFloat = styled.nav`
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    padding-top: 3rem;
`;

const NavbarFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: auto;
`;

const NavName = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
`;

const Navbar = () => {
    return (
        <NavbarFloat>
            <NavbarFlex>
                <Link href="/" passHref>
                    <a>
                       <NavName>Explain AI</NavName> 
                    </a>
                </Link>
            </NavbarFlex>
        </NavbarFloat>
    );
};

export default Navbar;
