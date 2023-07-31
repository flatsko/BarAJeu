import React from "react";
import { theme } from "../../../../theme/index";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="salutations">
        <p>
          Hey, <b>{username}</b>
        </p>
      
      <Link to="/">
      <div className="description">
        <small>Se déconnecter</small>
        </div>
      </Link>
      </div>
      <div className="icon">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100px;
  a {
    text-decoration: none;
    .description{
    color: ${theme.colors.greyMedium};
    &:hover {       
      color: ${theme.colors.greyDark};
      text-decoration: underline;
    }
    }
  }

  .salutations {
    display: flex;
    flex-direction:column;
    flex:1;
    flex-wrap:nowrap;
  }
  p {
    color: ${theme.colors.greyBlue};
    margin-block-end: 0px;
    margin-block-start: 0px;
    b {
      color: ${theme.colors.primary};
    }
  }

  .profile {
    background-color: purple;
  }
  small {
    font-size: ${theme.fonts.XXS};
    color: ${theme.colors.greyBlue};
    font-weight: ${theme.fonts.P0};
    text-decoration: none;
    position: relative;
    bottom: 2px;
  }

  .icon{
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    padding-left:1em;
  }
`;
