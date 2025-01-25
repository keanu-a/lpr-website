import { term, nationalBoard } from '@/data/nationalBoard';

export default function NationalBoard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex justify-center text-2xl mt-4 font-bold md:text-4xl">
        National Board
      </h1>

      <h2 className="flex justify-center text-xl">{term}</h2>

      <div className="flex flex-col gap-4">
        {nationalBoard.map((data, nationalBoardIndex) => (
          <div key={nationalBoardIndex}>
            <h4>{data.position}</h4>
            <h3>{data.name}</h3>

            <h5>{data.email}</h5>
            <p>
              {data.class} class: Graduated {data.graduation} with a{' '}
              {data.degree}
            </p>

            <p>{data.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
