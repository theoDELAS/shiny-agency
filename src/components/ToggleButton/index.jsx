import { useTheme } from "../../utils/hooks";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

const ToggleContainer = styled.div`
    width: 70px;
    background-color: ${({ theme }) =>
        theme === "light" ? colors.primary : colors.backgroundDark};
    cursor: pointer;
    user-select: none;
    border-radius: 50px;
    padding: 2px;
    height: 32px;
    position: relative;
    align-selft: center;
    margin: 10px 15px;
`;

const DialogButton = styled.div`
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ theme }) =>
        theme === "light" ? "#fff" : colors.dark};
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
    left: ${({ theme }) => (theme === "light" ? "2px" : "34px")};
    transition: all 0.3s ease;
`;

function ToggleButton() {
    const { toggleTheme, theme } = useTheme();

    return (
        <ToggleContainer theme={theme} onClick={() => toggleTheme()}>
            <DialogButton theme={theme}>
                {theme === "light" ? "☀️" : "🌙"}
            </DialogButton>
        </ToggleContainer>
    );
}

export default ToggleButton;
