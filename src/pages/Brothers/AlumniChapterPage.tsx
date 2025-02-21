import Title from '@/components/Title';
import { alumniChapter, AlumniChapter } from '@/data/alumniChapter';

export default function AlumniChapterPage() {
  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className="flex justify-center text-2xl mt-4 font-bold md:text-4xl">
        Alumni Chapter
      </h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {alumniChapter.map(
          ({ name, chapter, className }: AlumniChapter, alumniIdx) => (
            <li key={alumniIdx}>
              <Title
                title={name}
                subtitle={`${chapter} Chapter - ${className}`}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
