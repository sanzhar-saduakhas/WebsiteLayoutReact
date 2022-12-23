const Hero = () => {
  return (
    <div className="h-[657.03px] max-w-full relative bg-[url('./hero-bg.png')] bg-center bg-cover bg-no-repeat bg-fixed flex flex-col justify-center items-center mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-white text-[65px] font-eurostile_400 tracking-widest leading-[70px]">
          ВАМ ПОВЕЗЕТ,
        </h1>
        <h1 className="text-white text-[54px] font-eurostile_700 tracking-widest leading-[60px] mt-[15.31px] mb-[30.56px]">
          ЕСЛИ МЫ ПОВЕЗЕМ!
        </h1>
        <h3 className="text-white text-[24px] font-eurostile_400 leading-[30px] max-w-lg">
          ТОО «ITS LLC» – решаем самые сложные задачи в области организации
          перевозок
        </h3>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center">
        <h3 className="text-[#AFAFAF] font-eurostile_400 tracking-[0.3em] leading-[20px]">
          SCROLL DOWN
        </h3>
        <img className="mt-[19.52px]" src="./scroll-down.png" alt="" />
      </div>
      <a href="#FEEDBACK">
        <img
          className="absolute bottom-[23.75px] right-[22.57px]"
          src="./phone-2.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default Hero;
