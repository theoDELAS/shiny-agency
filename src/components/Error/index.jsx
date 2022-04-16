import styled from "styled-components";
import colors from "../../utils/styles/colors";
import ErrorVisual from "../../utils/assets/404.svg";

const StyledContainer = styled.div`
    background-color: ${colors.backgroundLight};
    & > .text {
        text-align: center;
        font-weight: 700;
        font-size: 31px;
        padding: 3rem 0;
    }
`;

const Visual = styled.div`
    text-align: center;
`;

function Error() {
    return (
        <StyledContainer>
            <h1 className="text">Oups...</h1>
            <Visual>
                <img src={ErrorVisual} alt="Error visual" />
            </Visual>
            <p className="text">Ils semblerait qu'il y'ait un problème</p>
        </StyledContainer>
    );
}

export default Error;
