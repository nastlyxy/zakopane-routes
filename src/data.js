import kasprowyImg from "./assets/images/kasprowy-wierch.jpg";
import morskieImg from "./assets/images/morskie-oko.jpg";
import gubalowkaImg from "./assets/images/gubalowka.jpg";
import chocholowskaImg from "./assets/images/dolina-chocholowska.jpg";

export const API_ROUTES = [
  {
    id: 1,
    name: "Kasprowy Wierch",
    distance: 12,
    difficulty: "hard",
    hasCableCar: true,
    description:
      "Kasprowy Wierch (1987 m) is a iconic peak in the Western Tatras on the Polish-Slovak border, renowned as Poland's premier high-mountain skiing area and a popular tourist destination. Accessible via a scenic cable car from Kuźnice, it offers breathtaking panoramic views of the Tatras and a unique alpine experience.",
    image: kasprowyImg,
  },
  {
    id: 2,
    name: "Morskie Oko",
    distance: 18,
    difficulty: "medium",
    hasCableCar: false,
    description:
      "Morskie Oko (Eye of the Sea) is the largest and most renowned lake in Poland's Tatra Mountains, located in the High Tatras at 1,395 meters above sea level. Known for its crystal-clear water and dramatic, vertical mountain surroundings, it is listed among the world's most beautiful lakes and is a must-visit spot in Zakopane.",
    image: morskieImg,
  },
  {
    id: 3,
    name: "Gubałówka",
    distance: 4,
    difficulty: "easy",
    hasCableCar: true,
    description:
      "Gubałówka is a popular mountain ridge and tourist destination rising 1,123 meters above sea level, located directly north of the town of Zakopane in southern Poland. It is widely considered one of the best vantage points in the region, offering a famous panoramic view of the entire Tatra Mountain range and the town of Zakopane below.",
    image: gubalowkaImg,
  },
  {
    id: 4,
    name: "Dolina Chochołowska",
    distance: 15,
    difficulty: "medium",
    hasCableCar: false,
    description:
      "Dolina Chochołowska (Chochołowska Valley) is the longest and largest valley in the Polish Tatra Mountains, extending roughly 10 km and covering over 35km2. Located in the Western Tatras, it is famous for its stunning spring crocus blooms, gentle hiking trails, and the largest shelter in the Polish Tatras. It is an ideal, relatively flat destination for families, cyclists, and senior visitors.",
    image: chocholowskaImg,
  },
];
