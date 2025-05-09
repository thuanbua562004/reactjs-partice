import { useTranslation } from 'react-i18next';

export default function CardCauses({src}) {
    const { t, i18n } = useTranslation();

    return(<>
              <div className="w-[360px]  shadow-lg">
            <img src={src? src : "https://nasarna-react.wpocean.com/static/media/img-1.db23ba6d.png"}></img>
            <div className="m-7">
              <h4 className="text-[22px] text-blue-900 mb-2 font-medium leading-[35px]">
               {t('titleImg')}
              </h4>
              <div className="process">
                <div className="w-full flex">
                  <div className="w-3/4 h-[7px] bg-color-main"></div>
                  <div className="w-1/4 h-[7px] bg-gray-300"></div>
                </div>
                <div className="flex justify-around">
                  <span className="raise text-[14px] text-gray-900 font-medium">
                    Raise 200$
                  </span>
                  <span className="goat text-[14px] text-gray-900 font-medium">
                    Goal 200$
                  </span>
                </div>
              </div>
            </div>
            <div className="group-action flex w-full ">
              <button className="bg-white w-1/2 h-[50px] shadow-lg border-t">
                {t('learn')}
              </button>
              <button className="bg-blue-400 w-1/2 h-[50px] shadow-lg">
                {t('donate')}
              </button>
            </div>
          </div>
    </>)
}