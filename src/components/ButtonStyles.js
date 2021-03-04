import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.bg ? props.bg : '#f47621')};
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => (props.hover ? props.hover : props.bg)};
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: ${(props) => (props.iconPadding ? props.iconPadding : 'unset')};
  margin-right: 10px;
  border-radius: ${(props) => (props.iconRadius ? props.iconRadius : 'unset')};
  background-color: ${(props) =>
    props.iconBackground ? props.iconBackground : 'transparent'};
`;
