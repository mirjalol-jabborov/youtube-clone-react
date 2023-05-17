  import styled from "styled-components";

  const StyledIconButton = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledIcon = styled.img`
      width: ${(props) => props.width};
      height: ${(props) => props.height};
  `;

  export { StyledIconButton, StyledIcon}
