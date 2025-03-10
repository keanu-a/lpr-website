import Title from '@/components/Title';
import { term, nationalBoard } from '@/data/nationalBoard';

export default function NationalBoard() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold md:text-4xl">National Board</h1>
        <h2 className="text-xl">{term}</h2>
      </div>

      <div className="flex flex-col gap-8 mt-8">
        {nationalBoard.map((data, index) => (
          <div
            className={`relative flex flex-col gap-4 sm:gap-12 sm:items-center sm:flex-row ${
              index % 2 === 0 ? 'text-left' : 'text-right sm:flex-row-reverse'
            }`}
            key={index}
          >
            <img
              src={data.photo}
              className="h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />

            <div className="flex flex-col gap-4">
              <div>
                <Title title={data.name} subtitle={data.position} />
                <h4 className="font-bold text-sm">
                  {data.class} Class - Graduated {data.graduation}
                </h4>
                <h5>Email: {data.email}</h5>
                <p>{data.degree}</p>
              </div>
              <p className="text-left">{data.bio}</p>
            </div>

            <div className="absolute -bottom-4 w-full content-[''] h-[0.5px] bg-maroon" />
          </div>
        ))}
      </div>
    </div>
  );
}
