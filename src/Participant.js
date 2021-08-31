import styled from "styled-components";
import React from "react";

import Menu from "./Menu";

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

const options = [
  {
    text: "Make moderator",
    action: () => null
  },
  {
    text: "Make speaker",
    action: () => null
  },
  {
    text: "Remove from call",
    action: () => null,
    warning: true
  }
];

export default ({
  isVisible,
  activateMenu,
  name,
  userName,
  hasAudio,
  accountType,
  muted,
  isActive,
  isAdmin
}) => {
  // const [menu, showMenu] = React.useState(false);
  //const [a, setA] = React.useState(false);
  const menu = false;
  return (
    <Container>
      <Avatar muted={muted} isActive={isActive}>
        <AvatarText>
          {isAdmin ? "admin" : ""}
          {"MJ"}
        </AvatarText>
      </Avatar>
      <Name onClick={() => showMenu(!menu)}>{name}</Name>
      {menu && (
        <MenuContainer>
          <Menu options={options} />
        </MenuContainer>
      )}
      {accountType !== "LST" && (
        <AudioIcon>{hasAudio ? <div>M</div> : <div>N</div>}</AudioIcon>
      )}
      {activateMenu && (
        <MenuButton onClick={() => console.log("c")}>
          <div>X</div>
        </MenuButton>
      )}
    </Container>
  );
};

const AVATAR_DIMENSION = 80;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  align-items: flex-start;
  position: relative;
  max-width: 104px;
`;
const Avatar = styled.div`
  width: ${AVATAR_DIMENSION}px;
  height: ${AVATAR_DIMENSION}px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.muted ? theme.colors.grey : theme.colors.turquoise};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => (props.isActive ? theme.colors.teal : "transparent")};
`;
const AvatarText = styled.p`
  font-size: ${theme.fontSize.large};
  color: ${theme.colors.blueLight};
  font-weight: 600;
  line-height: 32px;
`;
const Name = styled.p`
  color: ${theme.colors.blueDark};
  margin: 8px 0;
  font-weight: 400;
  font-size: ${theme.fontSize.base};
  padding-left: 4px;
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
`;
const AudioIcon = styled.div`
  position: absolute;
  top: ${AVATAR_DIMENSION - 28}px;
  left: -4px;
`;
const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: ${AVATAR_DIMENSION - 28}px;
  right: -4px;
  padding: 0;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
`;
