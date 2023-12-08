import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className="transition-group"
    >
      <CSSTransition classNames="price-transition" key={count} timeout={1000}>
        <span key="test">{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  span {
    display: inline-block;
  }
  .price-transition-enter {
    transform: translateY(100%);
    opacity: 0%;
  }

  .price-transition-enter-active {
    transition: 1s;
    transform: translateY(0%);
    opacity: 100%;
  }

  .price-transition-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .price-transition-exit-active {
    transform: translateY(-100%);
    transition: 1s;
  }
`;
