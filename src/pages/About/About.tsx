export default function About() {
  return (
    <>
      <h1 className="flex justify-center text-2xl mt-4 font-bold md:text-4xl">
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

      <h2 className="text-xl font-bold flex justify-center mt-8 md:text-2xl">
        Our Mission
      </h2>

      <div className="mt-4">
        <p>
          To develop brotherhood and individual growth through discipline,
          integrity, and commitment while upholding the ideals of our Founding
          Fathers:
        </p>

        <ul className="flex flex-col items-center gap-4 justify-around mt-8 md:flex-row">
          <li>Leadership in the community</li>
          <li>Pride in all that we do</li>
          <li>Respect for all persons</li>
        </ul>
      </div>
    </>
  );
}
