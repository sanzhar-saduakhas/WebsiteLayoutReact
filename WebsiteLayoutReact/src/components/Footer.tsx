const Footer = () => {
  return (
    <footer className="bg-[#EFEFEF] h-[254.24px] mx-auto flex flex-col mt-[85px]">
      <div className="flex px-[75px]">
          <div className="pt-[43.25px] mr-[130.11px]">
            <h1 className="font-ddt_400 text-[18px] leading-[30px]">ТОО «ITS LLC»</h1>
            <h3 className="font-robotoFlex_400 text-[14px] text-[#666666] leading-[20px] w-2/3">Часы работы: пн-пт с 09:00 до 18:00, обед с 12:30 до 13:30.</h3>
          </div>
          <div className="flex pt-[40.25px] mr-[252.89px]">
            <div className="mr-[67px] flex flex-col">
              <a href="#SHIPPING" className="font-robotoFlex_400 text-[18px] leading-[38px]">Услуги</a>
              <a href="#ABOUT" className="font-robotoFlex_400 text-[18px] leading-[38px]">О нас</a>
            </div>
            <div className="mr-[71px] flex flex-col">
              <a href="#DESCRIPTION" className="font-robotoFlex_400 text-[18px] leading-[38px]">Почему мы</a>
              <a href="#WORK" className="font-robotoFlex_400 text-[18px] leading-[38px]">Схема работы</a>
            </div>
            <div className="flex flex-col">
              <a href="#CLIENTS" className="font-robotoFlex_400 text-[18px] leading-[38px]">Отзывы</a>
              <a href="#CONTACTS" className="font-robotoFlex_400 text-[18px] leading-[38px]">Контакты</a>
            </div>
          </div>
          <div className="bg-[#0067A0] flex justify-center items-center text-white w-[208px] h-[48px] mt-[40.25px]">
            <a href="#FEEDBACK" className="font-eurostile_700 text-[16px] leading-[19.2px] tracking-[0.02em]">ОБРАТНЫЙ ЗВОНОК</a>
          </div>
      </div>
      <div className="mt-[54.84px] px-[75px]">
          <hr />
          <h2 className="text-[#666666] font-robotoFlex_400 text-[14px] leading-[20px] mt-[22px]">ABC DESIGN</h2>
      </div>
    </footer>
  );
};

export default Footer;
