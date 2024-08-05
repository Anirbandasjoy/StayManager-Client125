import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type SwiperNavButtonProps = {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
};

const SwiperNavButton: React.FC<SwiperNavButtonProps> = ({
  onPrev,
  onNext,
  isPrevDisabled = false,
  isNextDisabled = false,
}) => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div
          className={`${
            isPrevDisabled
              ? "text-gray-300 cursor-not-allowed bg-gray-100"
              : "hover:bg-gray-400 bg-gray-300 text-gray-500 cursor-pointer"
          } sm:w-9 sm:h-9 w-7 h-7 flex justify-center items-center rounded-xs border-gray-400 duration-200 font-bold`}
          onClick={!isPrevDisabled ? onPrev : undefined}
        >
          <IoIosArrowDropleft className="text-xl sm:text-2xl" />
        </div>

        <div
          className={`${
            isNextDisabled
              ? "text-gray-300 cursor-not-allowed bg-gray-100"
              : "hover:bg-gray-400 bg-gray-300 text-gray-500 cursor-pointer"
          } sm:w-9 sm:h-9 w-7 h-7 flex justify-center items-center rounded-xs border-gray-400 duration-200 font-bold`}
          onClick={!isNextDisabled ? onNext : undefined}
        >
          <IoIosArrowDropright className="text-xl sm:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SwiperNavButton;
