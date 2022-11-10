import config from "../config.json";
import styled from "styled-components";

import { GlobalStyle } from "../src/components/GlobalStyle";
import { Header } from "../src/components/Hearder";
import { Menu } from "../src/components/Menu";
import { TimeLine } from "../src/components/TimeLine"
import { useState } from "react";





function HomePage() {

  const [valorDoFiltro, setValorDoFiltro] = useState("")
  return (
    <>
      <GlobalStyle/>
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
              <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
              <Header />
              <TimeLine playlists={config.playlists} searchValue={valorDoFiltro}/>
      </div>
    </>
  )
}

export default HomePage