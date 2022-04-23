import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/styles/Atoms";
import LightLogo from "../../utils/assets/light-logo.png";
import DarkLogo from "../../utils/assets/dark-logo.png";
import { useTheme } from "../../utils/hooks";
import ToggleButton from "../ToggleButton";

const HomeLogo = styled.img`
    height: 70px;
`;

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RigthButtonsContainer = styled.div`
    display: flex;
    flex-direct: row;
    justify-content: space-around;
`;

function Header() {
    const { theme } = useTheme();

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === "light" ? DarkLogo : LightLogo} />
            </Link>
            <RigthButtonsContainer>
                <StyledLink $theme={theme} to="/">
                    Accueil
                </StyledLink>
                <StyledLink $theme={theme} to="/freelances">
                    Profils
                </StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
                <ToggleButton />
            </RigthButtonsContainer>
        </NavContainer>
    );
}

export default Header;
