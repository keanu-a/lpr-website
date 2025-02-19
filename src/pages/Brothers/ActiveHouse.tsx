import { activeHouse } from '@/data/activeHouse';

export default function ActiveHouse() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="flex justify-center text-2xl my-4 font-bold md:text-4xl">
        Active House
      </h1>

      <div className="w-full h-96 bg-black" />

      <ul className="flex gap-5 flex-wrap justify-center">
        {activeHouse.map((data, activeHouseIdx) => (
          <li key={activeHouseIdx} className="relative group cursor-pointer">
            {data.brotherName}

            <span className="absolute left-1/2 -translate-x-1/2 -top-5 px-2 py-1 text-xs bg-maroon text-white rounded-md opacity-0 transition-opacity group-hover:opacity-100">
              {data.class}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
