import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import logo from "../../utils/assets/dark-logo.png";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

const StyledLink = styled(Link)`
    padding: 15px 25px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    ${(props) => props.$isFull && `margin-right: auto`}
`;

const Logo = styled.img`
    width: 150px;
`;

function Header() {
    return (
        <StyledNav>
            <StyledLink $isFull to="/">
                <Logo src={logo} />
            </StyledLink>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/profils">Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>
                Faire le test
            </StyledLink>
        </StyledNav>
    );
}

export default Header;
