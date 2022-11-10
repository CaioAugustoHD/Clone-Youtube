import { StyledTimeline } from "./style";

export function TimeLine({ playlists, searchValue}) {
    const playlistName = Object.keys(playlists);
    return (
      <StyledTimeline>
        {playlistName.map((playlist) => {
          const videos = playlists[playlist];
          return (
            <section>
              <h2>{playlist}</h2>
              <div>
                {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)})
                  .map((video) => {
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
      </StyledTimeline>
    )
  }