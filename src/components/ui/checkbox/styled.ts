import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;

  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  transition-property: border-color;
  border: 1px solid ${({ theme }) => theme.colors.satinWhite};

  ::before {
    content: '';
    display: block;
    border-radius: 1px;
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: 0.1s transform ease-in-out;
    box-shadow: inset 13px 13px ${({ theme }) => theme.colors.cerulean};
  }

  :checked::before {
    transform: scale(1);
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.stormGray};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
