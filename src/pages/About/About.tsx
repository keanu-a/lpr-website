import Title from "@/components/Title";

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex justify-center text-2xl font-bold md:text-4xl">
        About Lambda Psi Rho
      </h1>

      <p className="mt-4">
        Lambda Psi Rho is an Asian-interest, but not Asian-exclusive,
        organization at the University of Nevada, Reno. We continuously promote
        brotherhood and diversity, foster leadership, succeed academically, and
        serve the community. We were established on February 11th, 2006, by 11
        distinguished gentlemen, and the active house continues their legacy by
        upholding our pillars of Leadership, Pride, and Respect.
      </p>

      <div className="mt-4 flex flex-col gap-6">
        <p>
          To develop brotherhood and individual growth through discipline,
          integrity, and commitment while upholding the ideals of our Founding
          Fathers:
        </p>

        <div>
          <Title title="Leadership in our community" subtitle="Leadership" />
          <p>
            Lambda Psi Rho enables all of its members to have leadership
            positions and opportunities to build confidence and success. We
            acquire the skills needed for success in school and in life. Success
            in both builds confidence for speaking, presenting, and leading in
            every aspect for your and career.
          </p>
        </div>

        <div>
          <Title title="Pride in all that we do" subtitle="Pride" />
          <p>
            When one accomplishes a goal, all of us accomplishes it together.
            Members of the fraternity emphasizes the importance of being bold,
            daring, and challenging, so that we can be at the highest level of
            prestige possible. Our vision is to tap into our potential and
            instill the idea of being humble and rooted to ourselves.
          </p>
        </div>

        <div>
          <Title title="Respect for all persons" subtitle="Respect" />
          <p>
            The most important thing to have is respect. Respect is the prime
            trait of any gentlemen. To earn it is to show it, and Lambda Psi Rho
            instill this pillar to the highest regard for all of its member.
            From school to service and into our everyday lives, this pillar will
            always be exemplified.
          </p>
        </div>
      </div>
    </div>
  );
}
