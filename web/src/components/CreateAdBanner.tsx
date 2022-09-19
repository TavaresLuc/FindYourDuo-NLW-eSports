import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner() {
    return(
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 ml-10 mr-10">   
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 mb-">Publique um anuncio para encontrar novos Players!</span>
            </div>
            <button className=" py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24}/>
              Publicar Anúncio
              </button>
            
          </div>
      </div> 
    )
}