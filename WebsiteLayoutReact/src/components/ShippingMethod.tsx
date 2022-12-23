const ShippingMethod = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="group hover:border-[#0067A0] border-2 border-[#E4E4E4] pt-[53.56px] pl-[50.13px] pb-[50.09px] cursor-pointer">
      <img className="mb-[31.05px]" src={img} alt="" />
      <img className="mb-[18px]" src="./shipping-helper.png" alt="" />
      <h1 className="group-hover:text-[#0067A0] group-hover:underline mb-[39px] text-[17px] font-eurostile_700 leading-[24px]">
        {title}
      </h1>
      <p className="mb-[23.67px] text-[#888888] w-1/2 font-eurostile_500 text-[14px] leading-[21px]">
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <p className="underline group-hover:text-[#0067A0] text-[#777777] text-[16px] font-eurostile_400 leading-[24px]">
          Подробнее
        </p>
        <button className="">
          <div className="group-hover:bg-[url('./shipping-helper3.png')] bg-[url('./button2.png')] bg-center bg-cover bg-no-repeat w-[28.24px] h-[28.24px] rounded-[50%]" />
        </button>
      </div>
    </div>
  );
};

export default ShippingMethod;
