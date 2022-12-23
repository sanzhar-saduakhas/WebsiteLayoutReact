import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Categories = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [animation] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className="mx-auto flex flex-col items-center mt-[85.05px]">
      <img className="mb-[33.45px]" src="./transition.png" alt="" />
      <h1 className="uppercase font-eurostile_500 text-[34px] leading-[40.8px] tracking-[0.05em] w-1/2 text-center mb-[50.45px]">
        КОНСОЛИДИРОВАННЫЕ И МЕЛКОШТУЧНЫЕ ГРУЗЫ ДЕЛЯТСЯ НА 2 КАТЕГОРИИ
      </h1>
      <div className="flex">
        <div
          ref={animation}
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
          className="group bg-[url('./category1.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center cursor-pointer mr-[185px]"
        >
          <div className="group-hover:my-[34.44px] group-hover:w-[417px] group-hover:h-[409px] group-hover:mx-[87.16px] group-hover:px-[38.84px] group-hover:py-[51.44px] bg-[#242424] mx-[87.16px] mb-[54.08px] mt-[304.62px] px-[137.84px] py-[46.5px] text-center flex flex-col justify-center items-center">
            <h1 className="text-white font-eurostile_700 text-[18px] leading-[27px]">
              Первая категория{" "}
            </h1>
            {isShown1 && (
              <h1 className="font-eurostile_500 text-[14px] leading-[20px] text-[#CDCDCD] w-[80%] group-hover:text-[12px]">
                Товары, приобретенные за наличный расчет или полученные
                безвозмездно (без оплаты) на территории КНР. Такие товары не
                имеют договоров о поставке, документов о происхождении.
                <br />
                <br /> Обычно сдаются без документов на территории КНР в склады,
                не имеющие юридического статуса. Так же, без документов,
                принимаются обратно на территории Казахстана. Никаких
                юридических, финансовых обязательств экспедиторы перед клиентами
                не несут. Все риски за сохранность груза никогда не переходят от
                клиента к экспедитору и обратно. Мы давно живем в двадцать
                первом веке и не должны использовать сомнительные способы
                перевозок.
              </h1>
            )}
          </div>
        </div>
        <div
          ref={animation}
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
          className="group bg-[url('./category2.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center cursor-pointer"
        >
          <div className="group-hover:my-[34.44px] group-hover:w-[417px] group-hover:h-[409px] group-hover:px-[38.84px] group-hover:py-[51.44px] bg-[#242424] mx-[87.16px] mb-[54.08px] mt-[304.62px] px-[137.84px] py-[46.5px] text-center flex flex-col justify-center items-center">
            <h1 className="text-white font-eurostile_700 text-[18px] leading-[27px]">
              Вторая категория
            </h1>
            {isShown2 && (
              <h1 className="font-eurostile_500 text-[14px] leading-[20px] text-[#CDCDCD] w-[80%] group-hover:text-[12px]">
                Товары, приобретенные за наличный расчет или полученные
                безвозмездно (без оплаты) на территории КНР. Такие товары не
                имеют договоров о поставке, документов о происхождении.
                <br />
                <br /> Обычно сдаются без документов на территории КНР в склады,
                не имеющие юридического статуса. Так же, без документов,
                принимаются обратно на территории Казахстана. Никаких
                юридических, финансовых обязательств экспедиторы перед клиентами
                не несут. Все риски за сохранность груза никогда не переходят от
                клиента к экспедитору и обратно. Мы давно живем в двадцать
                первом веке и не должны использовать сомнительные способы
                перевозок.
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
