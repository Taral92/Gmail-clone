import { LuPencil } from "react-icons/lu";
import { MdMoveToInbox } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { MdSend } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import Sendemail from "./Sendemail";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../app/slice";


const sidebaritems = [
  {
    icon: <MdMoveToInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <CiStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <FaRegClock size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <MdSend size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdExpandMore size={"20px"} />,
    text: "More",
  },
];
const Sidebar = () => {
 
  const rii = useSelector((state) => {
    return state.z.value2;
  });
  const dispatch = useDispatch();

  return (
    <div className="lg:w-[15%] sm:h-full md:w-1/3 h-full  sm:w-[15%]  py-1">
      <div className="px-3">
        <button
          onClick={() => dispatch(remove())}
          className=" bg-blue-300 flex items-center gap-2 p-3 hover:shadow-md rounded-2xl cursor-pointer"
        >
          <LuPencil size={"25px"} />
          Compose
        </button>
       

        <div className="text-gray-500 px-2  py-2 ">
          {sidebaritems.map((items, index) => (
            <>
              <button
                className="hover:bg-gray-200 rounded-r-full flex px-2 py-2 items-center gap-3 w-full"
                key={index}
              >
                {items.icon}
                <p>{items.text}</p>
              </button>
            </>
          ))}
        </div>
      </div>
      <div>{rii && <Sendemail />}</div>
    </div>
  );
};

export default Sidebar;
























