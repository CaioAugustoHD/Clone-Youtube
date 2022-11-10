import { StyledHeader, StyledBanner } from "./style"
import config from "../../../config.json"

export function Header() {
    return (
      <StyledHeader>
        <StyledBanner BannerURL={config.banner}/>
        <div className="user-info">
          <img src={`https://github.com/${config.github}.png`} alt="Foto de perfil" />
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </div>
      </StyledHeader>
    )
  }
  