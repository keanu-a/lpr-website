import Title from '@/components/Title';
import { term, nationalBoard } from '@/data/nationalBoard';

export default function NationalBoard() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold md:text-4xl">National Board</h1>

      <h2 className="text-xl">{term}</h2>

      <div className="flex flex-col gap-6">
        {nationalBoard.map((data, nationalBoardIndex) => (
          <div
            key={nationalBoardIndex}
            className={`text-center ${
              nationalBoardIndex % 2 === 0 ? 'md:text-left' : 'md:text-right'
            }`}
          >
            <Title title={data.name} subtitle={data.position} />
            <h4 className="font-bold text-sm">{data.class} Class</h4>

            <h5>Email: {data.email}</h5>
            <p>
              Graduated {data.graduation} - {data.degree}
            </p>

            <p>{data.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
