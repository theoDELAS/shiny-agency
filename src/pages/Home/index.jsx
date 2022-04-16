import styled from "styled-components";
import colors from "../../utils/styles/colors";
import HomeVisual from "../../utils/assets/home-illustration.svg";
import { Link } from "react-router-dom";

const StyledHomeContainer = styled.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    margin-top: 4rem;
    padding: 2rem;
    background-color: ${colors.backgroundLight};
`;

const LeftSection = styled.div`
    flex: 1;
    padding: 0 2rem;
    p {
        font-size: 50px;
        line-height: 160.5%;
        font-weight: 700;
    }
`;

const StyledButton = styled(Link)`
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
    padding: 5px 40px;
    text-decoration: none;
    font-size: 18px;
`;

const RightSection = styled.div`
    flex: 1;
    background-image: url(${HomeVisual});
    background-repeat: no-repeat;
    background-size: contain;
`;

function Home() {
    return (
        <StyledHomeContainer className="Home">
            <LeftSection>
                <p>
                    Repérez vos besoins,
                    <br /> on s'occupe du reste, <br /> avec les meilleurs{" "}
                    <br />
                    talents
                </p>
                <StyledButton to="/survey/1">Faire le test</StyledButton>
            </LeftSection>
            <RightSection></RightSection>
        </StyledHomeContainer>
    );
}

export default Home;
