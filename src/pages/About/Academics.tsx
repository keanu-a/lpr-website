export default function Academics() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="flex justify-center text-2xl font-bold md:text-4xl">
        Academics
      </h1>

      <p className="mt-4">
        The brothers of Lambda Psi Rho prides themselves in high academic
        standards. Lambda Psi Rho received the most improved and highest
        academic awards from the Multicultural Greek Council in 2012.
      </p>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 text-left sm:text-center">
        <div>
          <h1 className="text-3xl font-bold">2.5 GPA</h1>
          <p>
            In addition, the brotherhood requires a minimum 2.5 GPA to rush.
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold">2.75 GPA</h1>
          <p>
            Throughout the new member process, the fraternity pushes for
            academic excellence and implements a 2.75 GPA requirement to become
            a brother.
          </p>
        </div>

        <div className="sm:col-span-2">
          <h1 className="text-3xl font-bold">3.0 GPA</h1>
          <p>The brothers of Lambda Psi Rho strives to maintain 3.0 GPA.</p>
        </div>
      </div>

      <p>
        Upon joining the fraternity, Lambda Psi Rho continually promotes
        academic success by having strict GPA guidelines. Furthermore, the
        brothers implement a mentor system to help new members with academics.
        Lambda Psi Rho is academically diverse with brothers in nearly every
        major on campus.
      </p>
    </div>
  );
}
