import danny from "../assets/nationalBoard/danny.jpg";
import jacob from "../assets/nationalBoard/jacob.jpg";
import raul from "../assets/nationalBoard/raul.jpg";
import keanu from "../assets/nationalBoard/keanu.jpg";
import josh from "../assets/nationalBoard/josh.jpg";

export const term: string = "Fall 2024 - Spring 2026";

export const nationalBoard: {
  name: string;
  position: string;
  email: string;
  class: string;
  graduation: string;
  degree: string;
  bio?: string;
  photo?: string;
}[] = [
  {
    name: "Danny Phung",
    position: "National Board President",
    email: "nb.president@lambdapsirho.org",
    class: "Iota",
    graduation: "Spring 2018",
    degree: "B.S. in Neuroscience; M.S. in Clinical Mental Health Counseling", // Spring 2022
    bio: "Hello~ I’m a Las Vegas native with a background in counseling and mental health. I earned my undergraduate degree at UNR, where I was actively involved in Lambda Psi Rho, serving as marketing chair, MGC delegate, vice president of marketing, new member educator, and chapter president. After completing my master’s in counseling at UNLV, I returned to UNR where I am currently a PhD candidate in counselor education. My clinical work focuses on counseling Asian American and LGBTQ+ communities, with research interests in behavioral addictions like gambling, video gaming, and hypersexuality. In my free time, I enjoy music festivals, movies, coffee shops, and reading. Before my current role, I served as the province governor for the national board. As the National Board President, I am committed to honoring the values and objectives of the fraternity for all of my brothers.",
    photo: danny,
  },
  {
    name: "Jacob Davis",
    position: "National Board Vice President",
    email: "nb.vicepresident@lambdapsirho.org",
    class: "Kappa",
    graduation: "Spring 2018",
    degree: "B.S. in Psychology; M.A. in Counseling",
    bio: "My favorite part of being in Lambda Psi Rho is the strong sense of brotherhood and the meaningful work we do together. I deeply appreciate my brothers, who truly embody the values of a Lambda Psi Rho. Beyond that, our organization creates opportunities to host exciting events and give back to the community in ways that wouldn't be possible alone. Lambda Psi Rho isnt just something I'm a part of, it's a part of me",
    photo: jacob,
  },
  {
    name: "Christian Corabo",
    position: "National Board Treasurer",
    email: "nb.treasurer@lambdapsirho.org",
    class: "Mu",
    graduation: "Spring 2018",
    degree: "B.S. in Economics",
  },
  {
    name: "Raul Esteves",
    position: "National Board Historian",
    email: "nb.historian@lambdapsirho.org",
    class: "Lambda",
    graduation: "Spring 2019",
    degree: "B.S. in Biochemistry and Molecular Biology",
    bio: "I’m a real estate agent with a passion for business and research, currently focused on developing software and business systems. I’ve successfully grown my business to 3x its revenue. When I’m not working, I enjoy diving into video games. Also this is me (right) with CEO of Patreon.",
    photo: raul,
  },
  {
    name: "Keanu Aloua",
    position: "National Board Secretary",
    email: "nb.secretary@lambdapsirho.org",
    class: "Sigma",
    graduation: "Spring 2024",
    degree: "B.S. in Computer Science",
    bio: "Sup I'm Keanu and one of the reasons I joined Lambda Psi Rho was to just be involved on campus with a group of guys with similar backgrounds. I also wanted to be apart of leadership positions and make a difference within the community. I've met some great brothers in the fraternity and I really do see them as a second family. I've made lifelong connections and experiences that I will never forget. I also play piano when I'm not coding so if you want to start a band lmk. Shout out to my big and my little. Shout out to my line. Lastly, grind hard and get the bag.",
    photo: keanu,
  },
  {
    name: "Joshua Staana",
    position: "National Board Province Governor",
    email: "",
    class: "Theta",
    graduation: "Spring 2018",
    degree: "B.S. in Mechanical Engineering",
    bio: "Hello, my name is Josh StaAna. When I attended my first Lambda Psi Rho rush events, I met a lot of goofballs that reminded me of my friends back in Vegas. After I joined, it became a home away from home because of the memories I made with my line brothers, safety meetings, late night food runs, and our makeshift olympic events. With this position I hope to get to know the new classes and future prospective members.",
    photo: josh,
  },
];
