import styled from 'styled-components';

export const StyledAuthLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  > div {
    display: grid;
    place-items: center;
    place-content: center;
  }

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: 1fr;
    grid-template-rows: 0.75fr 1fr;

    > div {
      :last-child {
        align-self: start;
      }

      > img {
        width: 150px;
        height: 175px;
      }
    }
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-rows: 0.3fr 1fr;

    > div > img {
      display: none;
    }

    > div:last-child {
      align-self: start;
    }
  }
`;

export const AuthLayoutTitle = styled.h1`
  color: ${({ theme }) => theme.colors.cerulean};
  font-weight: 600;
  margin-top: 32px;
  font-size: 47px;
  line-height: 57px;

  ${({ theme }) => theme.media.tablet} {
    margin-top: 0;
  }
`;
