import config from "../config.json";
import styled from "styled-components";


const StyledHeader = styled.header`
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

function TimeLine({ playlists }) {
  const playlistName = Object.keys(playlists);
  return (
    <main>
      {playlistName.map((playlist) => {
        const videos = playlists[playlist];
        return (
          <section>
            <h2>{playlist}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
                })}
            </div>
          </section>
        )
      })}
    </main>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <TimeLine playlists={config.playlists} />
    </>
  )
}

export default HomePage