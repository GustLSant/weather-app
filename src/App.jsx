import React from 'react'
import axios from 'axios'
import MainPanel from './components/MainPanel/MainPanel'
import SidePanel from './components/SidePanel/SidePanel'
import { DataContext } from './components/DataContext'
import './App.css'


function App(){
  const {data, setData} = React.useContext(DataContext)

  async function getData(){
    try{
      console.log('rodou a funcao getData')

      // setData({
      //   dayOfWeek: 'Twesday',
      //   hour: '15:00',
      //   date: 'dd/MM/yyyy',
      //   temp: '34',
      //   tempMax: '36',
      //   temMin: '32',
      //   cloudCover: '25',
      //   precipChance: '10',
      //   currentPrecip: '0',
      //   description: 'Partly Cloudy'
      // })
    }
    catch(e){
      console.log('Error: ', e)
    }
  }

  React.useEffect(()=>{
    getData()
  }, []) // executa so uma vez no carregamento da pagina

  return(
    <div className="app">
      <MainPanel />
      <SidePanel />
    </div>
  )
}

export default App


// mostly-cloudy: Foto de <a href="https://unsplash.com/pt-br/@dannyeve?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daoudi Aissa</a> na <a href="https://unsplash.com/pt-br/fotografias/nuvens-cumulus-Pe1Ol9oLc4o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// tempest: Foto de <a href="https://unsplash.com/pt-br/@marcwieland95?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marc Wieland</a> na <a href="https://unsplash.com/pt-br/fotografias/trovoada-com-relampago-trnTvywx2Rg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// raining: Foto de <a href="https://unsplash.com/pt-br/@fwed?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fred Moon</a> na <a href="https://unsplash.com/pt-br/fotografias/foto-seletiva-de-gotas-de-janela-de-agua-9AGsp0We0Yw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// partially-cloudy: Foto de <a href="https://unsplash.com/pt-br/@atluminon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clark Gu</a> na <a href="https://unsplash.com/pt-br/fotografias/um-aviao-voando-atraves-de-um-ceu-azul-cheio-de-nuvens-jMHzrsRWovk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// clear-sky: Foto de <a href="https://unsplash.com/pt-br/@chulbulpande_jiiii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sarang Pande</a> na <a href="https://unsplash.com/pt-br/fotografias/guarda-chuvas-amarelos-IijeyJbmrec?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>



  // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle'
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '8bf3649e88mshfabf99f3093337ep1e5824jsn16a8485724f0',
  //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  //   }
  // }

  // fetch(url, options)
  //   .then((response)=>{
  //     response.json()
  //   })
  //   .then((response)=>{
  //     console.log(response)
  //   })
  // .catch((error)=>{
  //   console.log('Error: ', error)
  // })