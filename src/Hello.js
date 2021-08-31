import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Participant from "./Participant";

const theme = {
  colors: {
    blue: "#1f2d3d",
    blueDark: "#121a24",
    blueLight: "#2b3f56",
    cyan: "#00c9df",
    cyanDark: "#00a4b7",
    cyanLight: "#e2fbfd",
    green: "#72cc18",
    greenDark: "#62a60f",
    greenLight: "#eefae0",
    grey: "#c8d1dc",
    greyDark: "#6b7785",
    greyLight: "#e6eaef",
    greyLightest: "#f7f9fa",
    orange: "#fb651e",
    orangeDark: "#d48200",
    orangeLight: "#fef2d8",
    red: "#e71115",
    redDark: "#bb0c0c",
    redLight: "#fddddd",
    white: "#ffffff",
    turquoise: "#1bebb9",
    teal: "#14997a"
  },
  fontSize: {
    small: "11px",
    base: "12px",
    med: "14px",
    large: "16px",
    xlarge: "28px",
    xxlarge: "32px"
  },
  fontFamily: {
    regular: "Helvetica, Arial, sans-serif"
  }
};

const Container = styled.div`
  margin: 48px 0 0;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  height: ${(props) => (props.hidden ? "0" : "100%")};
`;
const CanSpeakContainer = styled.div`
  border-bottom: ${theme.colors.grey} 1px solid;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;
const ListeningContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`;
const Header = styled.h2`
  font-size: ${theme.fontSize.large};
  color: ${theme.colors.greyDark};
`;
const CallHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
const Tray = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 52px;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${theme.colors.greyLight};
  padding: 12px;
`;
const TrayContent = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Button = styled.button`
  font-size: ${theme.fontSize.large};
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${theme.colors.greyLightest};
  }
`;
const LeaveButton = styled(Button)`
  margin-left: auto;
`;
const HandButton = styled(Button)`
  margin-right: auto;
`;
const AudioButton = styled(Button)`
  margin-right: auto;
  display: flex;
  align-items: center;
`;
const ButtonText = styled.span`
  margin-left: 4px;
`;

const AvatarWrapper = styled.div`
  background: #000;
  height: 5.6rem;
  width: 5.6rem;
  border-radius: 50%;
  display: inline-flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.span`
  font-size: 1.2rem;
`;

const Avatar = (props) => {
  const { text, url } = props;
  return (
    <div>
      <Container>
        <CallHeader>
          <Header>Speakers</Header>
        </CallHeader>
        <CanSpeakContainer>
          <Participant />
          <Participant />
        </CanSpeakContainer>
        <Header>Listeners</Header>
        {"listeners"}
        <Tray>
          <TrayContent>
            {["MOD", "SPEAKER"].includes(text) ? (
              <AudioButton onClick={() => console.log("audio")}>
                {true ? <MicIcon type="simple" /> : <MutedIcon type="simple" />}
                <ButtonText>{true ? "Mute" : "Unmute"}</ButtonText>
              </AudioButton>
            ) : (
              <HandButton onClick={() => console.log("raising")}>
                <ButtonText>
                  {false ? "Lower hand" : "Raise hand ✋"}
                </ButtonText>
              </HandButton>
            )}
            {true ? (
              <LeaveButton onClick={() => console.log("end call")}>
                End call
              </LeaveButton>
            ) : (
              <LeaveButton onClick={() => console.log("leave call")}>
                Leave call
              </LeaveButton>
            )}
          </TrayContent>
        </Tray>
      </Container>
      {/* <Audio participants={[]} /> */}
    </div>
  );
};

Avatar.propTypes = {
  /** Avatar Sizes */
  size: PropTypes.oneOf(["small", "default", "large"]),

  /** Class Name */
  className: PropTypes.string,

  /** Children Text */
  text: PropTypes.string,

  /** Image URL */
  url: PropTypes.string,

  /** OnClick Handler */
  onClick: PropTypes.func
};

Avatar.defaultProps = {
  size: "default",
  url: "https://www.w3schools.com/w3images/avatar2.png"
};

export default Avatar;
