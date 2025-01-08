import { foundingChapterBrothers } from '@/constants/foundingChapter';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export default function FoundingChapter() {
  const [selectedClass, setSelectedClass] = useState('Founding Fathers');

  const onClassSelect = (clickedClass: string) => {
    setSelectedClass(clickedClass);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold">Founding Chapter</h1>

      <Button
        className="mt-8"
        onClick={() => onClassSelect(foundingChapterBrothers[0].className)}
      >
        Founding Fathers
      </Button>

      <div className="flex flex-wrap justify-center gap-6 p-12">
        {foundingChapterBrothers.slice(1).map(({ className, greekLetter }) => (
          <Button onClick={() => onClassSelect(className)}>
            {greekLetter}
          </Button>
        ))}
      </div>

      {foundingChapterBrothers.map(({ className, brothers }) => (
        <div
          className={cn(
            'flex flex-col items-center',
            className == selectedClass ? 'visible' : 'hidden'
          )}
        >
          <h2 className="text-2xl font-bold">{className}</h2>
          <ul className="mt-4">
            {brothers.map((brotherName) => (
              <li>{brotherName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
