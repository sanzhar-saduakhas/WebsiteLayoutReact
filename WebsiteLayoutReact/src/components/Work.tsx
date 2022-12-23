const Work = () => {
  return (
    <div id="WORK" className="mx-auto flex flex-col items-center mt-[85.05px]">
      <img src="./transition.png" alt="" />
      <h1 className="uppercase font-eurostile_500 leading-[40.8px] text-[34px] mt-[32.53px]">
        как мы работаем
      </h1>
      <div className="flex justify-center space-x-[56px] mt-[49.43px] h-[417.59px]">
        <div className="group bg-[#F5F5F5] py-[112.72px] px-[31px] w-1/5 cursor-pointer hover:bg-[url('./work2.png')] hover:bg-center hover:bg-cover hover:bg-no-repeat">
          <div className="bg-[#0067A0] rounded-[50%] text-white font-eurostile_400 p-2 w-[46.77px] h-[46.77px] flex justify-center items-center">
            01
          </div>
          <h1 className="group-hover:text-white font-eurostile_700 text-[24px] leading-[24px] w-[165px] mt-[21px] mb-[33.37px]">
            ПОДПИСАНИЕ ЗАЯВКИ
          </h1>
          <p className="group-hover:text-[#EAEAEA] font-eurostile_400 text-[16px] leading-[22px] w-[240px] text-[#6D6D6D]">
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.
          </p>
        </div>
        <div className="group bg-[#F5F5F5] py-[112.72px] px-[31px] w-1/5 cursor-pointer hover:bg-[url('./work2.png')] hover:bg-center hover:bg-cover hover:bg-no-repeat hover:text-white">
          <div className="bg-[#0067A0] rounded-[50%] text-white font-eurostile_400 p-2 w-[46.77px] h-[46.77px] flex justify-center items-center">
            02
          </div>
          <h1 className="group-hover:text-white font-eurostile_700 text-[24px] leading-[24px] w-[165px] mt-[21px] mb-[58.37px]">
            ПРИЕМ ГРУЗА
          </h1>
          <p className="group-hover:text-[#EAEAEA] font-eurostile_400 text-[16px] leading-[22px] w-[240px] text-[#6D6D6D]">
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.
          </p>
        </div>
        <div className="group bg-[#F5F5F5] py-[112.72px] px-[31px] w-1/5 cursor-pointer hover:bg-[url('./work2.png')] hover:bg-center hover:bg-cover hover:bg-no-repeat hover:text-white">
          <div className="bg-[#0067A0] rounded-[50%] text-white font-eurostile_400 p-2 w-[46.77px] h-[46.77px] flex justify-center items-center">
            03
          </div>
          <h1 className="group-hover:text-white font-eurostile_700 text-[24px] leading-[24px] mt-[21px] mb-[33.37px] w-[110%]">
            ДОСТАВКА <br />В ТЕЧЕНИИ 15 ДНЕЙ
          </h1>
          <p className="group-hover:text-[#EAEAEA] font-eurostile_400 text-[16px] leading-[22px] w-[240px] text-[#6D6D6D]">
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.
          </p>
        </div>
        <div className="group bg-[#F5F5F5] py-[112.72px] px-[31px] w-1/5 cursor-pointer hover:bg-[url('./work2.png')] hover:bg-center hover:bg-cover hover:bg-no-repeat hover:text-white">
          <div className="bg-[#0067A0] rounded-[50%] text-white font-eurostile_400 p-2 w-[46.77px] h-[46.77px] flex justify-center items-center">
            04
          </div>
          <h1 className="group-hover:text-white font-eurostile_700 text-[24px] leading-[24px] mt-[21px] mb-[10.37px]">
            ДОСТАВЛЕННЫЙ <br />
            ГРУЗ В ВАШЕМ РАСПОРЯЖЕНИИ
          </h1>
          <p className="group-hover:text-[#EAEAEA] font-eurostile_400 text-[16px] leading-[22px] w-[240px] text-[#6D6D6D]">
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
