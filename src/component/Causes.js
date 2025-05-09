import CardCauses from "./CardCauses";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTranslation } from 'react-i18next';

export default function Cause(params) {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <div className=" max-w-6xl h-fit py-[120px] mx-auto ">
        <div className="container content h-[207px]">
          <span className="text-[18px] text-color-main block text-center mb-4">
           {t('what')}
          </span>
          <h2 className=" text-blue-900 text-[28px] md:text-[36px] text-center font-black">
            {t('titleHelp')}
          </h2>
        </div>

<ScrollContainer
  className="scroll-container flex overflow-x-auto snap-x snap-mandatory"
  vertical={false}
  onMouseDown={() => (document.body.style.cursor = 'grabbing')}
  onMouseUp={() => (document.body.style.cursor = 'grab')}
  onMouseLeave={() => (document.body.style.cursor = 'grab')}
>
  <div className="flex gap-4">
    <CardCauses src={'https://nasarna-react.wpocean.com/static/media/img-2.7f30d201.png'} className="min-w-full snap-center" />
    <CardCauses src={'https://nasarna-react.wpocean.com/static/media/img-2.7f30d201.png'} className="min-w-full snap-center" />
    <CardCauses src={'https://nasarna-react.wpocean.com/static/media/img-2.7f30d201.png'} className="min-w-full snap-center" />
    <CardCauses src={'https://nasarna-react.wpocean.com/static/media/img-2.7f30d201.png'} className="min-w-full snap-center" />
    <CardCauses className="min-w-full snap-center" />
    <CardCauses className="min-w-full snap-center" />
  </div>
</ScrollContainer>
      </div>
    </>
  );
}
