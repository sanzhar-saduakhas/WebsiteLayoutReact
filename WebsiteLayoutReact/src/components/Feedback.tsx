const Feedback = () => {
  return (
    <div id="FEEDBACK" className="mt-[85.05px] bg-[url('./feedback-bg.png')] bg-[#2D2D2D] bg-blend-overlay bg-center bg-cover bg-no-repeat bg-fixed h-[582px] mx-auto flex flex-col justify-center items-center space-y-5">
      <h1 className="text-white font-eurostile_500 text-[34px] leading-[40.8px]">ОБРАТНЫЙ ЗВОНОК</h1>
      <img src="./feedback-helper.png" alt="" />
      <h2 className="text-white font-eurostile_500 text-[17px] leading-[26px]">Просто оставьте заявку и мы вам перезвоним!</h2>
      <div className="bg-white">
        <div className="flex items-center pt-[10.17px] pr-[10px] pb-[9.83px]">
          <input className="pl-[25px] mr-[123px] font-eurostile_400 text-[14px] leading-[24px] text-[#444444]" type="text" placeholder="Ваше имя"/>
          <img src="./feedback-helper2.png" alt="" />
          <input className="ml-[31.5px] mr-[139.5px] font-eurostile_400 text-[14px] leading-[24px] text-[#444444]" type="text" placeholder="+7 (...)"/>
          <button className="bg-[#0067A0] text-white p-[10px] font-eurostile_700 text-[16px] leading-[19.2px] tracking-[0.02em] w-[180px] h-[48px]">ОТПРАВИТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
