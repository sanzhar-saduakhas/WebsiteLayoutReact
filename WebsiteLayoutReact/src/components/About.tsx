const About = () => {
  return (
    <div id="ABOUT" className="flex">
      <div className="flex mx-auto mt-[84.87px] mb-[85.21px]">
        <img
          className="ml-[76px] mr-[24.16px] mb-[63.5px]"
          src="./img.png"
          alt=""
        ></img>
        <img className="mt-[93.3px] mr-[775.px]" src="./img2.png" alt="" />
        <div className="mt-[93.3px] ml-[77.5px]">
          <img className="mb-[32.53px]" src="./transition.png" alt="" />
          <h1 className="mb-[22.6px] uppercase text-[34px] font-eurostile_500 leading-[40.8px]">
            о компании
          </h1>
          <p className="text-[16px] w-[55%] text-[#888888] leading-[24px] font-eurostile_500">
            ТОО «ITS LLC» образована в 2006 г. Является официальным экспедитором
            на ЖД транспорте с 2007 г. <br /> <br />
          </p>
          <p className="text-[16px] w-[58%] text-[#888888] leading-[24px] font-eurostile_500">
            Команда ТОО «ITS LLC» состоит из молодых и энергичных личностей,
            способных решать самые сложные задачи в области организации
            перевозок. Сотрудники имеют высокую квалификацию и опыт в сфере
            международных перевозок и внешнеэкономической деятельности.
          </p>
        </div>
      </div>
      <div className="mt-[84.87px] flex justify-center items-center ">
        <img className="" src="./about-helper.png"></img>
        <h1 className="origin-center rotate-90 text-[#AFAFAF] font-eurostile_400 text-[18px] leading-[20px] tracking-[0.3em]">
          ТОО «ITS LLC»
        </h1>
      </div>
    </div>
  );
};

export default About;
