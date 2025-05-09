import Btndonate from "./Btndonate";
import React , {useState} from 'react'
import WatchVideo from '../component/WatchVideo'
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const { t, i18n } = useTranslation();
  const [stateVideo ,setStateVideo] = useState(false)
  function handerColose(state) {
    setStateVideo(state)
  }
  let renderVideo = stateVideo ? <WatchVideo handerColose={handerColose}/>:""
  console.log(stateVideo)
  return (
    <>
   {renderVideo}
    <div className="dark:bg-color-dark container mx-auto">
    <div className="max-w-full sm:w-full dark:bg-color-dark h-[550px] lg:h-[900px] md:max-w-6xl  flex justify-center items-center">
        <div className=" bg-white dark:bg-color-dark max-w-full h-auto flex md:mt-3  md:flex  md:items-center lg:justify-start justify-center Intro-Right after-img">
          <div className="Intro-Left w-3/4 md:w-3/4">
            <div className="intro-content ">
              <div className="intro-title"></div>
              <h2 className="relative text-[40px] md:text-[60px] text-[#062265] font-bold z-100">
                {t('titleIntro')}<span className="text-color-main text-[40px] md:text-[60px]">{t('children')}</span>
              </h2>
              <p className="font-[16px] text-text-main dark:text-white mb-2">
               {t('subtitle')}
              </p>
              <p className="font-[16px] text-text-main dark:text-white mb-2">
                {t('titleHelp')}
              </p>
              <div className="intro-action flex items-center  mt-[30px]">
                <Btndonate size={"w-[190px] h-[50px]"} />
                <div className="intro-action-more  flex justify-center items-center ml-2" >
                  <button onClick={(e)=>setStateVideo(!stateVideo)} className="before-play relative action-watch bg-white shadow-md w-12 h-12 rounded-full mx-5"> </button>
                  <h5 className="text-text-main dark:text-white text-[16px]" >{t('watch')}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 
    </>
  );
}
