import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    flex: 1;
    margin: 1rem 0 0 2rem;
`;

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 0 auto;
`;

const CardTitle = styled.span`
    text-align: center;
    flex: 1;
    margin-top: 2rem;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    label: "",
    title: "",
    picture: "https://picsum.photos/200/300",
};

export default Card;
