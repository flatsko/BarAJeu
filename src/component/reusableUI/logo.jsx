import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  return (
    <StyledLogo className={className} onClick={onClick}>
      <h1>CRAZEE</h1>
      <img className="logo" src="/images/logo-orange.png" />
      <h1>BURGER</h1>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    height: 100px;
  }

  h1 {
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P6};
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    display: flex;
    justify-content: space-evenly;
    color: ${theme.colors.primary};
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em ${theme.colors.primary_burger});
  }
`;
