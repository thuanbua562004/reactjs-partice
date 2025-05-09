import Card from "./Card";
import { useTranslation } from 'react-i18next';

export default function TheHelp(params) {
    const { t, i18n } = useTranslation();
  
    return(<>
       <div className="dark:bg-color-dark  py-[120px] max-w-fit mx-auto ">
       <div className="w-fit h-[207px] mx-auto ">
        <span className="text-[18px] mb-[10px] text-color-main text-center block">
         {t('what')}
        </span>
        <h2 className="mx-auto text-center font-bold text-blue-950 text-[36px]">
          {t('titleCause')}
        </h2>
      </div>

      <div className="w-fit mx-auto  grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
       </div>
    </>)
}