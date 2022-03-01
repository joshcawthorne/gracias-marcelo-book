import { useState } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import Logo from "src/assets/svg/lustLogo.svg";
import Button from "./Button";
import mq from "src/utils/mq";
import MobileMenu from "src/components/MobileMenu";

import Plus from "src/assets/svg/plus.svg";
import RandomIcon from "src/assets/svg/randomIcon.svg";
import MenuIcon from "src/assets/svg/menuIcon.svg";

const HeaderContainerOuter = styled.div`
  width: 100%;
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #130c1f78;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 10;
  ${mq.mobile(css`
    padding: 15px 0px;
  `)};
  ${(props) => props.removeZIndex && "z-index: 0;"}
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;
  ${mq.mobile(css`
    padding: 0 15px;
  `)}
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq.mobile(css`
    display: none;
  `)};
`;

const MenuIconContainer = styled.div`
  display: none;
  ${mq.mobile(css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  `)};
`;

function Header({ removeZIndex }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  function handleViewRandom() {
    setMenuOpen(false);
    router.push("/random");
  }
  return (
    <>
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

      <HeaderContainerOuter removeZIndex={removeZIndex}>
        <HeaderContainer>
          <Logo
            height={"50px"}
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />
          <RightContent>
            <ButtonContainer>
              <Button
                text={"View a random Submission"}
                useIcon
                action={handleViewRandom}
                Icon={RandomIcon}
              />
              <Button text={"Submit your message"} useIcon Icon={Plus} />
            </ButtonContainer>
            <MenuIconContainer onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </MenuIconContainer>
          </RightContent>
        </HeaderContainer>
      </HeaderContainerOuter>
    </>
  );
}

export default Header;
