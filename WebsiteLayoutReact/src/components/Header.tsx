import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <header className="mx-auto">
      <div className="flex items-center justify-around my-[37.67px] mx-[21px]">
        <img className="w-[158.96px] h-[35.64px]" src="./logo.png" alt="" />
        <nav className="hidden md:flex md:space-x-[25px]">
          <a href="#SHIPPING" className="text-lg font-eurostile_500">
            УСЛУГИ
          </a>
          <a href="#ABOUT" className="text-lg font-eurostile_500">
            О НАС
          </a>
          <a href="#DESCRIPTION" className="text-lg font-eurostile_500">
            ПОЧЕМУ МЫ
          </a>
          <a href="#WORK" className="text-lg font-eurostile_500">
            СХЕМА РАБОТЫ
          </a>
          <a href="#CLIENTS" className="text-lg font-eurostile_500">
            ОТЗЫВЫ
          </a>
          <a href="#CONTACTS" className="text-lg font-eurostile_500">
            КОНТАКТЫ
          </a>
        </nav>
        <div className="flex flex-col">
			<div
			  className="bg-[url('./nav.png')] bg-cover bg-no-repeat bg-center w-[50px] h-[50px] md:hidden"
			  onClick={handleClick}
			></div>
			{clicked && (
			  <div>
				<a href="#SHIPPING" className="text-lg font-eurostile_500">
				  УСЛУГИ
				</a>
				<a href="#ABOUT" className="text-lg font-eurostile_500">
				  О НАС
				</a>
				<a href="#DESCRIPTION" className="text-lg font-eurostile_500">
				  ПОЧЕМУ МЫ
				</a>
				<a href="#WORK" className="text-lg font-eurostile_500">
				  СХЕМА РАБОТЫ
				</a>
				<a href="#CLIENTS" className="text-lg font-eurostile_500">
				  ОТЗЫВЫ
				</a>
				<a href="#CONTACTS" className="text-lg font-eurostile_500">
				  КОНТАКТЫ
				</a>
			  </div>
			)}
		</div>
        <div className="hidden md:flex md:items-center">
          <img
            className="w-[22.33px] h-[22.37px] mr-[8.94px]"
            src="./phone.png"
            alt=""
          />
          <h2 className="text-[18px] font-eurostile_500 leading-[30px]">
            +7 (701) 710-98-00
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
