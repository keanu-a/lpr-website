import Title from '@/components/Title';
import { activeHouse, ActiveHouse } from '@/data/activeHouse';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function ActiveHousePage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="flex justify-center text-2xl my-4 font-bold md:text-4xl">
        Active House
      </h1>

      <ImagePlaceholder className="w-full h-96 " />

      <ul className="flex gap-5 flex-wrap justify-center md:gap-10">
        {activeHouse.map(
          ({ brotherName, className }: ActiveHouse, activeHouseIdx) => (
            <li key={activeHouseIdx} className="relative group cursor-pointer">
              <Title title={brotherName} subtitle={className} />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
