import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px 14px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  transition-duration: 0.4s;
  transition-property: border-color;
  transition-timing-function: ease-out;
  border: 1px solid ${({ theme }) => theme.colors.satinWhite};

  ::placeholder {
    color: ${({ theme }) => theme.colors.stormGray};
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.stormGray};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
