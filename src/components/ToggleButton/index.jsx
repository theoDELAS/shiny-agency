import { useTheme } from "../../utils/hooks";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

const ToggleContainer = styled.div`
    width: 70px;
    background-color: ${({ selected }) =>
        selected ? colors.primary : colors.backgroundDark};
    cursor: pointer;
    user-select: none;
    border-radius: 50px;
    padding: 2px;
    height: 32px;
    position: relative;
`;

const DialogButton = styled.div`
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? "#fff" : colors.dark)};
    color: white;
    padding: 8px 12px;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    min-width: unset;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: ${({ selected }) => (selected ? "2px" : "34px")};
    transition: all 0.3s ease;
`;

function ToggleButton() {
    const { toggleTheme, theme } = useTheme();
    const [selected, setSelected] = useState(true);

    function toggleSelected() {
        setSelected(!selected);
        toggleTheme();
    }
    return (
        <ToggleContainer selected={selected} onClick={toggleSelected}>
            <DialogButton selected={selected}>
                {selected ? "☀️" : "🌙"}
            </DialogButton>
        </ToggleContainer>
    );
}

ToggleButton.propTypes = {
    selected: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func.isRequired,
};

export default ToggleButton;
