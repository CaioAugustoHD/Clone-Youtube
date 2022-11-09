import config from "../config.json";
import styled from "styled-components";

import { GlobalStyle } from "../src/components/GlobalStyle";
import { Menu } from "../src/components/Menu/index";
import { TimeLine } from "../src/components/TimeLine/index"


const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 16px 32px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img src="" alt="Banner" />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="Foto de perfil" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}



function HomePage() {
  return (
    <>
      <GlobalStyle/>
      <Menu/>
      <Header />
      <TimeLine playlists={config.playlists} />
    </>
  )
}

export default HomePage