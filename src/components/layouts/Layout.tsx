import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { AppHead } from "components/layouts/AppHead";
import styled from "styled-components";
type Props = {
  children: React.ReactNode;
};

const CustomAppBar = styled(AppBar)`
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;
const LogoImg = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;

export const Layout = (props: Props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <>
      <AppHead></AppHead>
      <CustomAppBar
        position="fixed"
        style={{
          backgroundColor: show ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <LogoImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </Toolbar>
      </CustomAppBar>
      <div>
        <main>{props.children}</main>
      </div>
    </>
  );
};
