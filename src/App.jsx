import React from 'react'
import MainPanel from './components/MainPanel/MainPanel'
import SidePanel from './components/SidePanel/SidePanel'
import { DataContext } from './components/DataContext'
import './App.css'


function App(){
  const { data, bgImagesSources } = React.useContext(DataContext)

  const bgImagePrefix = 'linear-gradient(to bottom, var(--blackness-background), var(--blackness-background)), url(src/assets/images/'
  const bgImageSulfix = ')'
  let bgImage = bgImagePrefix + Object.values(bgImagesSources)[data.iconId] + bgImageSulfix

  //console.log('render app')

  return(
    <div className="app" style={{backgroundImage: bgImage}}>
      <MainPanel />
      <SidePanel />
    </div>
  )
}

export default App

// day-clear-sky: Image by <a href="https://pixabay.com/users/jplenio-7645255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3588618">Joe</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3588618">Pixabay</a>
// day-partly-cloudy: <a href="https://unsplash.com/pt-br/@dannyeve?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daoudi Aissa</a> na <a href="https://unsplash.com/pt-br/fotografias/nuvens-cumulus-Pe1Ol9oLc4o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// day-mostly-cloudy: https://pixabay.com/photos/sky-clouds-rays-weather-1365325/
// day-cloudy: Image by <a href="https://pixabay.com/users/engin_akyurt-3656355/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2680190">Engin Akyurt</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2680190">Pixabay</a>
// day-raining: Image by <a href="https://pixabay.com/users/joshua_seajw92-6153261/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3216607">준원 서</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3216607">Pixabay</a>

// night-partly-cloudy: Image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1869753">Pexels</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1869753">Pixabay</a>
// night-mostly-cloudy: Image by <a href="https://pixabay.com/users/nela77-694891/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1151747">Manuela Strasser</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1151747">Pixabay</a>
// night-clear-sky: Image by <a href="https://pixabay.com/users/rkarkowski-289667/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1859616">Robert Karkowski</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1859616">Pixabay</a>
// night-cloudy: ???
// night-raining-2: Image by <a href="https://pixabay.com/users/milivigerova-742747/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=715911">Milada Vigerova</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=715911">Pixabay</a>










// mostly-cloudy: Foto de 
// tempest: Foto de <a href="https://unsplash.com/pt-br/@marcwieland95?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marc Wieland</a> na <a href="https://unsplash.com/pt-br/fotografias/trovoada-com-relampago-trnTvywx2Rg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// raining: Foto de <a href="https://unsplash.com/pt-br/@fwed?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fred Moon</a> na <a href="https://unsplash.com/pt-br/fotografias/foto-seletiva-de-gotas-de-janela-de-agua-9AGsp0We0Yw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// partially-cloudy: Foto de <a href="https://unsplash.com/pt-br/@atluminon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clark Gu</a> na <a href="https://unsplash.com/pt-br/fotografias/um-aviao-voando-atraves-de-um-ceu-azul-cheio-de-nuvens-jMHzrsRWovk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// clear-sky: Foto de <a href="https://unsplash.com/pt-br/@chulbulpande_jiiii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sarang Pande</a> na <a href="https://unsplash.com/pt-br/fotografias/guarda-chuvas-amarelos-IijeyJbmrec?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
