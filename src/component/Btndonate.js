import { useTranslation } from 'react-i18next';


export default function Btndonate({size}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <button className={`p-[2px]  ${size}  items-center  outline-none bg-color-main rounded-md cursor-pointer hover:text-color-second text-white`}>
        {t('donate')}
      </button>
    </>
  );
}
