import thumbnail1 from "@/assets/images-1/thumbnail.jpg";
import small1 from "@/assets/images-1/hero-small.jpg";
import large1 from "@/assets/images-1/hero-large.jpg";
import gallery1 from "@/assets/images-1/gallery.jpg";
import artist1 from "@/assets/images-1/artist.jpg";

import thumbnail2 from "@/assets/images-2/thumbnail.jpg";
import small2 from "@/assets/images-2/hero-small.jpg";
import large2 from "@/assets/images-2/hero-large.jpg";
import gallery2 from "@/assets/images-2/gallery.jpg";
import artist2 from "@/assets/images-2/artist.jpg";

import thumbnail3 from "@/assets/images-3/thumbnail.jpg";
import small3 from "@/assets/images-3/hero-small.jpg";
import large3 from "@/assets/images-3/hero-large.jpg";
import gallery3 from "@/assets/images-3/gallery.jpg";
import artist3 from "@/assets/images-3/artist.jpg";

import thumbnail4 from "@/assets/images-4/thumbnail.jpg";
import small4 from "@/assets/images-4/hero-small.jpg";
import large4 from "@/assets/images-4/hero-large.jpg";
import gallery4 from "@/assets/images-4/gallery.jpg";
import artist4 from "@/assets/images-4/artist.jpg";

import thumbnail5 from "@/assets/images-5/thumbnail.jpg";
import small5 from "@/assets/images-5/hero-small.jpg";
import large5 from "@/assets/images-5/hero-large.jpg";
import gallery5 from "@/assets/images-5/gallery.jpg";
import artist5 from "@/assets/images-5/artist.jpg";

import thumbnail6 from "@/assets/images-6/thumbnail.jpg";
import small6 from "@/assets/images-6/hero-small.jpg";
import large6 from "@/assets/images-6/hero-large.jpg";
import gallery6 from "@/assets/images-6/gallery.jpg";
import artist6 from "@/assets/images-6/artist.jpg";

import thumbnail7 from "@/assets/images-7/thumbnail.jpg";
import small7 from "@/assets/images-7/hero-small.jpg";
import large7 from "@/assets/images-7/hero-large.jpg";
import gallery7 from "@/assets/images-7/gallery.jpg";
import artist7 from "@/assets/images-7/artist.jpg";

import thumbnail8 from "@/assets/images-8/thumbnail.jpg";
import small8 from "@/assets/images-8/hero-small.jpg";
import large8 from "@/assets/images-8/hero-large.jpg";
import gallery8 from "@/assets/images-8/gallery.jpg";
import artist8 from "@/assets/images-5/artist.jpg";

import thumbnail9 from "@/assets/images-9/thumbnail.jpg";
import small9 from "@/assets/images-9/hero-small.jpg";
import large9 from "@/assets/images-9/hero-large.jpg";
import gallery9 from "@/assets/images-9/gallery.jpg";
import artist9 from "@/assets/images-9/artist.jpg";

import thumbnail10 from "@/assets/images-10/thumbnail.jpg";
import small10 from "@/assets/images-10/hero-small.jpg";
import large10 from "@/assets/images-10/hero-large.jpg";
import gallery10 from "@/assets/images-10/gallery.jpg";
import artist10 from "@/assets/images-10/artist.jpg";

import thumbnail11 from "@/assets/images-11/thumbnail.jpg";
import small11 from "@/assets/images-11/hero-small.jpg";
import large11 from "@/assets/images-11/hero-large.jpg";
import gallery11 from "@/assets/images-11/gallery.jpg";
import artist11 from "@/assets/images-11/artist.jpg";

import thumbnail12 from "@/assets/images-12/thumbnail.jpg";
import small12 from "@/assets/images-12/hero-small.jpg";
import large12 from "@/assets/images-12/hero-large.jpg";
import gallery12 from "@/assets/images-12/gallery.jpg";
import artist12 from "@/assets/images-12/artist.jpg";

import thumbnail13 from "@/assets/images-13/thumbnail.jpg";
import small13 from "@/assets/images-13/hero-small.jpg";
import large13 from "@/assets/images-13/hero-large.jpg";
import gallery13 from "@/assets/images-13/gallery.jpg";
import artist13 from "@/assets/images-13/artist.jpg";

import thumbnail14 from "@/assets/images-14/thumbnail.jpg";
import small14 from "@/assets/images-14/hero-small.jpg";
import large14 from "@/assets/images-14/hero-large.jpg";
import gallery14 from "@/assets/images-14/gallery.jpg";
import artist14 from "@/assets/images-14/artist.jpg";

import thumbnail15 from "@/assets/images-15/thumbnail.jpg";
import small15 from "@/assets/images-15/hero-small.jpg";
import large15 from "@/assets/images-15/hero-large.jpg";
import gallery15 from "@/assets/images-15/gallery.jpg";
import artist15 from "@/assets/images-15/artist.jpg";

export interface Painting {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: string;
  style: string;
  class: string;
  images?: {
    thumbnail: string;
    small: string;
    large: string;
    gallery: string;
    artist: string;
  };
}

export interface Social {
  url: string;
  name: string;
  aria: string;
}

export const paintings: Painting[] = [
  {
    name: "Starry Night",
    year: 1889,
    description:
      'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
    source: "https://en.wikipedia.org/wiki/The_Starry_Night",
    artist: "Vincent Van Gogh",
    style: "height: 250px",
    class: "max-w-360 max-h-238",
    images: {
      thumbnail: thumbnail1,
      small: small1,
      large: large1,
      gallery: gallery1,
      artist: artist1,
    },
  },
  {
    name: "The Storm on the Sea of Galilee",
    year: 1633,
    description:
      "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
    source: "https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee",
    artist: "Rembrandt",
    style: "height: 340px",
    class: "max-w-380 max-h-302",
    images: {
      thumbnail: thumbnail2,
      small: small2,
      large: large2,
      gallery: gallery2,
      artist: artist2,
    },
  },
  {
    name: "Lady with an Ermine",
    year: 1489,
    description:
      "The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\"Il Moro\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa",
    source: "https://en.wikipedia.org/wiki/Lady_with_an_Ermine",
    artist: "Leonardo da Vinci",
    style: "height: 420px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail3,
      small: small3,
      large: large3,
      gallery: gallery3,
      artist: artist3,
    },
  },
  {
    name: "The Boy in the Red Vest",
    year: 1889,
    description:
      "Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US",
    source: "https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest",
    artist: "Paul Cézanne",
    style: "height: 260px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail4,
      small: small4,
      large: large4,
      gallery: gallery4,
      artist: artist4,
    },
  },
  {
    name: "Girl with a Pearl Earring",
    year: 1665,
    description:
      "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
    source: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
    artist: "Johannes Vermeer",
    style: "height: 400px",
    class: "max-w-360 max-h-302",
    images: {
      thumbnail: thumbnail5,
      small: small5,
      large: large5,
      gallery: gallery5,
      artist: artist5,
    },
  },
  {
    name: "The Great Wave off Kanagawa",
    year: 1831,
    description:
      'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.',
    source: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
    artist: "Hokusai",
    style: "height: 280px",
    class: "max-h-302",
    images: {
      thumbnail: thumbnail6,
      small: small6,
      large: large6,
      gallery: gallery6,
      artist: artist6,
    },
  },
  {
    name: "The Night Café",
    year: 1888,
    description:
      "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
    source: "https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9",
    artist: "Vincent Van Gogh",
    style: "height: 260px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail7,
      small: small7,
      large: large7,
      gallery: gallery7,
      artist: artist7,
    },
  },
  {
    name: "Arnolfini Portrait",
    year: 1434,
    description:
      "It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \"in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\".",
    source: "https://en.wikipedia.org/wiki/Arnolfini_Portrait",
    artist: "Jan van Eyck",
    style: "height: 330px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail8,
      small: small8,
      large: large8,
      gallery: gallery8,
      artist: artist8,
    },
  },
  {
    name: "Guernica",
    year: 1937,
    description:
      "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.",
    source: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
    artist: "Pablo Picasso",
    style: "height: 285px",
    class: "max-w-360 max-h-174",
    images: {
      thumbnail: thumbnail9,
      small: small9,
      large: large9,
      gallery: gallery9,
      artist: artist9,
    },
  },
  {
    name: "Van Gogh self-portrait",
    year: 1889,
    description:
      'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.',
    source: "https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)",
    artist: "Vincent Van Gogh",
    style: "height: 500px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail10,
      small: small10,
      large: large10,
      gallery: gallery10,
      artist: artist10,
    },
  },
  {
    name: "Mona Lisa",
    year: 1503,
    description:
      "The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
    source: "https://en.wikipedia.org/wiki/Mona_Lisa",
    artist: "Leonardo da Vinci",
    style: "height: 525px",
    class: "max-w-310 max-h-238",
    images: {
      thumbnail: thumbnail11,
      small: small11,
      large: large11,
      gallery: gallery11,
      artist: artist11,
    },
  },
  {
    name: "Penitent Magdalene",
    year: 1625,
    description:
      "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
    source:
      "https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)",
    artist: "Artemisia Gentileschi",
    style: "height: 250px",
    class: "max-w-396 max-h-238",
    images: {
      thumbnail: thumbnail12,
      small: small12,
      large: large12,
      gallery: gallery12,
      artist: artist12,
    },
  },
  {
    name: "The Sleeping Gypsy",
    year: 1897,
    description:
      "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.",
    source: "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy",
    artist: "Henri Rousseau",
    style: "height: 250px",
    class: "max-w-350 max-h-302",
    images: {
      thumbnail: thumbnail13,
      small: small13,
      large: large13,
      gallery: gallery13,
      artist: artist13,
    },
  },
  {
    name: "The Basket of Apples",
    year: 1893,
    description:
      "The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.",
    source: "https://en.wikipedia.org/wiki/The_Basket_of_Apples",
    artist: "Paul Cézanne",
    style: "height: 430px",
    class: "max-w-450 max-h-238",
    images: {
      thumbnail: thumbnail14,
      small: small14,
      large: large14,
      gallery: gallery14,
      artist: artist14,
    },
  },
  {
    name: "The Swing",
    year: 1767,
    description:
      "The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.",
    source: "https://en.wikipedia.org/wiki/The_Swing_(Fragonard)",
    artist: "Jean-Honoré Fragonard",
    style: "height: 340px",
    class: "max-h-174",
    images: {
      thumbnail: thumbnail15,
      small: small15,
      large: large15,
      gallery: gallery15,
      artist: artist15,
    },
  },
];

export const socials: Social[] = [
  {
    url: "https://www.linkedin.com/in/anneris-wong-jorge-257948104",
    name: "LinkedInIcon",
    aria: "Anneris E. Wong Jorge LinkedIn profile",
  },
  {
    url: "https://github.com/Wong0790",
    name: "GithubIcon",
    aria: "Anneris E. Wong Jorge Github profile",
  },
  {
    url: "https://www.frontendmentor.io/profile/Wong0790",
    name: "FrontendMentorIcon",
    aria: "Anneris E. Wong Jorge Frowntend Mentor profile",
  },
];
