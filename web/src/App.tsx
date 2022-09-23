import { useState, useEffect} from 'react'
import './styles/main.css';
import logoImg from './assets/nlwesports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/Form/CreateAdModal';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
      axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
    }, [])

  return (
    

    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-5 ">  

      <img src={logoImg} alt=""/>

      <h1 className="text-5xl text-white font-black mt-5 text-center">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text ">duo</span> está aqui
        </h1>

      <div className="grid grid-cols-6 gap-6">

        {games.map(game => {
          return (
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
          )
        })}
        
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>  
      
    </div>
  )
}

export default App
