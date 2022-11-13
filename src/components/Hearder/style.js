import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({theme}) => theme.backgroundLevel1} ;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 16px 32px;
  }
`;

export const StyledBanner = styled.div`
    background-color: #333;
    background-image: url(${({BannerURL}) => BannerURL});
    background-size: cover;
    height: 230px;
`;