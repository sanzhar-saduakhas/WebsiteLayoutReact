const Description = () => {
  return (
    <div
      id="DESCRIPTION"
      className="bg-[url('./description-bg.png')] bg-center bg-cover bg-no-repeat bg-fixed h-[527.94px] max-w-full relative"
    >
      <div className="flex items-center pt-[132px]">
        <div className="ml-[74.87px] mr-[58.13px]">
          <div className="flex items-center mb-[25.39px]">
            <img className="mr-[21.5px]" src="./description-1.png" alt="" />
            <h1 className="text-white text-[18px] leading-[24px] font-eurostile_500 uppercase w-1/3">от 50$ за куб</h1>
          </div>
          <h2 className="text-[#F2F2F2] font-eurostile_400 text-[18px] leading-[20px] w-[110%]">
            Прием груза в любой точке КНР. Доставка от 50 долларов за куб.
          </h2>
        </div>
        <div className="mr-[59.74px]">
          <div className="flex items-center mb-[25.39px] mt-[15px]">
            <img className="mr-[16.99px]" src="./description-2.png" alt="" />
            <h1 className="text-white text-[18px] leading-[24px] font-eurostile_500 uppercase w-[40%]">
              оперативно и надежно
            </h1>
          </div>
          <h2 className="text-[#F2F2F2] font-eurostile_400 text-[18px] leading-[20px]">
            Прием и обработка заявок онлайн. Принимаем груз в день обращения.
          </h2>
        </div>
        <div className="mr-[58.13px]">
          <div className="flex items-center mb-[25.39px] mt-[15px]">
            <img className="mr-[16.12px]" src="./description-3.png" alt="" />
            <h1 className="text-white text-[18px] leading-[24px] font-eurostile_500 uppercase w-1/2">
              полная отчетность
            </h1>
          </div>
          <h2 className="text-[#F2F2F2] font-eurostile_400 text-[18px] leading-[20px]">
            Вывоз груза из КНР каждую неделю. Фотоотчет о всех перевалках грузов.
          </h2>
        </div>
        <div className="mr-[75.13px]">
          <div className="flex items-center mb-[25.39px] mt-[30px]">
            <img className="mr-[15.63px]" src="./description-4.png" alt="" />
            <h1 className="text-white text-[18px] leading-[24px] font-eurostile_500 uppercase w-[40%]">
              свой транспорт и свои СВХ
            </h1>
          </div>
          <h2 className="text-[#F2F2F2] font-eurostile_400 text-[18px] leading-[20px] w-[65%]">
            Есть собственный транспорт для перевозки консолидации. Размещение на
            СВХ в г. Алматы с выгрузкой и без.
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 right-[75.13px] bg-white h-[143.64px] w-[326.75px] flex items-center justify-around">
        <a href="#FEEDBACK" className="underline text-[#0067A0] font-medium text-[28px] w-[120px]">
          Обратный звонок
        </a>
        <img src="./arrow-2.png" alt="" />
      </div>
    </div>
  );
};

export default Description;
