interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <h3 className="font-bold text-maroon uppercase">{subtitle}</h3>
      <h2 className="text-lg font-bold md:text-2xl">{title}</h2>
    </div>
  );
}
