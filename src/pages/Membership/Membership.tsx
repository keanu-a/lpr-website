import {
  Users,
  Globe,
  Flag,
  HeartHandshake,
  Accessibility,
  Church,
} from 'lucide-react';

const MEMBERSHIP_BULLETPOINTS = [
  {
    Icon: Users,
    text: 'Race',
  },
  {
    Icon: Globe,
    text: 'Ethnicty',
  },
  {
    Icon: Flag,
    text: 'National Origin',
  },
  {
    Icon: HeartHandshake,
    text: 'Sexual Orientation',
  },
  {
    Icon: Accessibility,
    text: 'Disability',
  },
  {
    Icon: Church,
    text: 'Religion',
  },
];
const ICON_SIZE = 28;

export default function Membership() {
  return (
    <div className="md:w-2/3 mx-auto">
      <h1 className="flex justify-center text-2xl font-bold md:text-4xl">
        Membership
      </h1>

      <div className="mt-4 flex flex-col gap-4">
        <div className="text-maroon font-semibold">
          Collegiate membership may be conferred upon any man who is a student
          of the sheltering institution, regardless of:
        </div>

        <ul className="flex flex-col gap-2">
          {MEMBERSHIP_BULLETPOINTS.map((data, bulletIdx) => (
            <li key={bulletIdx} className="flex items-center gap-2">
              <data.Icon size={ICON_SIZE} />
              <p className="font-bold">{data.text}</p>
            </li>
          ))}
        </ul>

        <div>
          A student shall be eligible if he has met the minimum academic
          performance standards for successful continuation as a student in good
          standing as defined by the sheltering institution.
        </div>
      </div>
    </div>
  );
}
