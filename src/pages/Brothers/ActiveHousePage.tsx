import {
  activeHouse,
  ActiveHouse,
  ExecutiveBoard,
  eboard,
} from '@/data/activeHouse';
import activeHousePhoto from '@/assets/activeHouse/active-house-sp-2025.jpg';
import activeHouseEboardPhoto from '@/assets/activeHouse/eboard-sp-2025.jpg';

export default function ActiveHousePage() {
  return (
    <>
      <section className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" text-2xl font-bold md:text-4xl">Active House</h1>
          <p className="text-lg md:text-2xl">Spring 2025</p>
        </div>

        <img
          src={activeHousePhoto}
          className="w-full rounded-lg shadow-lg object-cover md:h-[36rem]"
        />

        <ul className="flex gap-5 flex-wrap justify-center md:gap-10">
          {activeHouse.map(({ brotherName, className }: ActiveHouse, index) => (
            <li key={index} className="">
              <span className="font-bold text-maroon">{className}</span>
              <p className="md:text-lg">{brotherName}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-center gap-8 mt-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" text-xl font-bold md:text-4xl">
            Active House Executive Board
          </h1>
          <p className="md:text-2xl">Spring 2025</p>
        </div>
        <img
          src={activeHouseEboardPhoto}
          className="w-full rounded-lg shadow-lg object-cover md:w-2/3 md:h-[26rem]"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3">
          {eboard.map(({ brotherName, role }: ExecutiveBoard, index) => (
            <li key={index} className="">
              <p className="font-bold text-maroon">{role}</p>
              <p className="md:text-lg">{brotherName}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
