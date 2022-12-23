const Clients = () => {
  return (
    <div id="CLIENTS" className="h-[378.55px] mx-[75px] space-y-10 mt-[85.05px]">
      <div className="flex justify-between items-center">
        <h1 className="uppercase font-medium text-[34px]">
          что о нас говорят наши клиенты
        </h1>
        <div className="flex space-x-[17.74px]">
          <button>
            <img src="./button1.png" alt="" />
          </button>
          <img src="./shipping-helper2.png" alt="" />
          <button>
            <img src="./button2.png" alt="" />
          </button>
        </div>
      </div>
      <img src="./shipping-helper.png" alt="" />
      <img className="w-[1366px]" src="./clients.png" alt="" />
    </div>
  );
};

export default Clients;
