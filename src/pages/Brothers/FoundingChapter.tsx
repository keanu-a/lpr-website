import {
  foundingFathers,
  foundingChapterBrothers,
} from '@/data/foundingChapter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Title from '@/components/Title';

export default function FoundingChapter() {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      <h1 className="flex justify-center text-2xl my-4 font-bold md:text-4xl">
        Founding Chapter
      </h1>

      <div className="flex flex-col gap-4">
        <Title title="11 Distinguished Gentlemen" subtitle="Founding Fathers" />

        <div className="w-full h-96 bg-black" />

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {foundingFathers.map((name, fatherIndex) => (
            <li key={fatherIndex}>{name}</li>
          ))}
        </ul>
      </div>

      <Accordion type="single" collapsible>
        {foundingChapterBrothers.map((data, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <p>
                {data.greekLetter} - {data.className}
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2">
                <div>
                  {data.brothers.map((name, brotherIndex) => (
                    <li key={brotherIndex}>{name}</li>
                  ))}
                </div>
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
