const Contacts = () => {
  return (
    <div id="CONTACTS" className="flex mt-[139.1px] mx-[75px] h-[508px]">
      <img className="mr-[169px]" src="./map.png" alt="" />
      <div className="border-2 flex flex-col justify-around px-10 py-6">
        <div className="flex space-x-3">
          <img className="w-[16.42px] h-[21.25px] mt-[5px]" src="./pin.png" alt="" />
          <div>
            <h2 className="font-eurostile_500 text-[18px] leading-[28.45px] text-[#989898]">
              Адрес:
            </h2>
            <h2 className="font-eurostile_400 text-[17px] leading-[24px] w-[100%]">
              050052, Казахстан, г.Алматы, мкр. Дубок, ул.Пригородная 9
            </h2>
          </div>
        </div>
        <hr />
        <div className="flex space-x-3">
          <img className="w-[18.8px] h-[18.8px] mt-[7px]" src="./phone-3.png" alt="" />
          <div className="">
            <h2 className="font-eurostile_500 text-[18px] leading-[28.45px] text-[#989898]">
              Телефон:
            </h2>
            <h2 className="font-eurostile_400 text-[17px] leading-[28.45px] w-[70%]">
              +7 (701) 710-98-00 +7 (727) 224-55-95
            </h2>
          </div>
        </div>
        <hr />
        <div className="flex space-x-3">
          <img className="w-[20px] h-[15.23px] mt-[7px]" src="./email.png" alt="" />
          <div className="">
            <h2 className="font-eurostile_500 text-[18px] leading-[28.45px] text-[#989898]">
              Email:
            </h2>
            <h2 className="font-eurostile_400 text-[17px] leading-[28.45px]">
              itsllc@itsllc.kz
            </h2>
          </div>
        </div>
        <hr />
        <div className="flex space-x-3">
          <img className="w-[20px] h-[15.23px] mt-[7px]" src="./email.png" alt="" />
          <div className="">
            <h2 className="font-eurostile_500 text-[18px] leading-[28.45px] text-[#989898]">
              Skype:
            </h2>
            <h2 className="font-eurostile_400 text-[17px] leading-[28.45px]">
              MARAT_I
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
