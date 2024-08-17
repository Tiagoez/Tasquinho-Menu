import { HomeButtonsData } from "../data/homeButtons";
import useRedirect from "../hooks/useRedirect";

function HomeButtons() {

  function handleClick(isTargetBlank: boolean, link: string): void {
    useRedirect(isTargetBlank, link);
  }

  return (
    <div className="flex flex-col p-8 mt-2 gap-4 text-[#000000] font-abeezee">
      {HomeButtonsData.map((item) => (
        <button
          className="p-4 border border-[#000000]"
          key={item.link}
          onClick={() => handleClick(item.isTargetBlank, item.link)}
        >
          <div className="flex justify-center items-center">
            <item.icon className="mr-1" />
            {item.label}
          </div>
        </button>
      ))}
    </div>
  );
}

export default HomeButtons;
