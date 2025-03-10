import { activeHouse, ActiveHouse } from '@/data/activeHouse';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function ActiveHousePage() {
  return (
    <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
      <h1 className="flex justify-center text-2xl my-4 font-bold md:text-4xl">
        Active House
      </h1>

      <ImagePlaceholder className="w-full h-[26rem] " />

      <ul className="flex gap-5 flex-wrap justify-center md:gap-10">
        {activeHouse.map(({ brotherName, className }: ActiveHouse, index) => (
          <li key={index} className="">
            <span className="font-bold text-maroon">{className}</span>
            <p className="md:text-lg">{brotherName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
