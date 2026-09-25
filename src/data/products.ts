export type ProductCategory = "produits" | "accessoires";

export interface Product {
  /** Original numeric id from signoreplast.ma (produit.php?id=N) — preserved for redirect mapping / SEO continuity */
  sourceId: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  availability: "En stock";
  specifications?: string[];
}

export const products: Product[] = [
  {
    sourceId: 3,
    slug: "perle-angle-pvc-interieur",
    name: "Perle d'angle PVC intérieur, Baguette d'angle",
    shortDescription:
      "Baguette d'angle PVC protège et décore le mur, adaptée à différents types de murs et résistante aux chocs.",
    description: [
      "Baguette d'angle PVC.",
      "Les baguettes d'angle en plastique PVC pour le rendu ont été largement utilisées dans toutes sortes de bâtiments extérieurs et intérieurs pour protéger le coin du mur.",
      "Efficacité très élevée, réduit le coût de construction et garantit la beauté et la fermeté de la corne.",
      "Résistant aux chocs.",
    ],
    category: "produits",
    categoryLabel: "Produits PVC",
    image: "/images/products/parle-angle-pvc-interieur.png",
    availability: "En stock",
  },
  {
    sourceId: 6,
    slug: "perle-angle-pvc-exterieur",
    name: "Perle d'angle PVC extérieur, Baguette d'angle",
    shortDescription:
      "Baguette d'angle PVC protège et décore le mur, adaptée à différents types de murs et résistante aux chocs.",
    description: [
      "Baguette d'angle PVC.",
      "Les baguettes d'angle en plastique PVC pour le rendu ont été largement utilisées dans toutes sortes de bâtiments extérieurs et intérieurs pour protéger le coin du mur.",
      "Efficacité très élevée, réduit le coût de construction et garantit la beauté et la fermeté de la corne.",
      "Résistant aux chocs.",
    ],
    category: "produits",
    categoryLabel: "Produits PVC",
    image: "/images/products/parle-angle-pvc-exterieur.png",
    availability: "En stock",
  },
  {
    sourceId: 14,
    slug: "rastrelle-pvc-junquillo",
    name: "Rastrelle en PVC (Junquillo) pour Enduit Monocouche",
    shortDescription:
      "Profilé d'angle conçu pour les revêtements monocouches. Garantit des angles parfaitement droits et une résistance renforcée aux chocs et aux rayures.",
    description: [
      "La Rastrelle en PVC (Junquillo) est un accessoire indispensable pour les travaux d'enduit monocouche, de plâtre et de finition murale. Conçue pour assurer un alignement précis des angles, elle permet d'obtenir des arêtes nettes, droites et durables.",
      "Fabriquée en PVC de haute qualité, cette rastrelle offre une excellente résistance aux chocs, aux fissures et aux rayures, garantissant une finition professionnelle aussi bien en intérieur qu'en extérieur.",
    ],
    specifications: [
      "Assure des angles parfaitement alignés",
      "Renforce et protège les arêtes murales",
      "Haute résistance aux chocs et à l'usure",
      "Compatible avec enduit monocouche",
      "Installation simple et rapide",
      "Idéale pour travaux de plâtre et construction",
    ],
    category: "produits",
    categoryLabel: "Produits PVC",
    image: "/images/products/rastrelle-pvc-junquillo.png",
    availability: "En stock",
  },
  {
    sourceId: 7,
    slug: "maille-platre-fibre-verre",
    name: "Maille de plâtre en fibre de verre de béton",
    shortDescription:
      "Prolonge la durée de vie des surfaces en plâtre et en béton en offrant une protection supplémentaire.",
    description: [
      "Le maillage en fibre de verre est fabriqué à partir de fils de fibre de verre tissés comme base, puis recouvert d'un latex acrylique résistant aux alcalis. Il présente une excellente résistance aux alcalis et une haute résistance mécanique.",
      "Ce maillage est largement utilisé pour le renforcement des murs, le plâtrage et les systèmes de finition d'isolation extérieure. De plus, il est couramment employé pour la rénovation des surfaces des bâtiments.",
    ],
    category: "produits",
    categoryLabel: "Produits PVC",
    image: "/images/products/maille-platre-fibre-verre-beton.png",
    availability: "En stock",
  },
  {
    sourceId: 4,
    slug: "tube-annele-50m",
    name: "Tube annelé, Rouleau de 50 mètres",
    shortDescription:
      "Tube isolant, cintrable, avec tire-fil en acier galvanisé, utilisable dans les installations électriques des bâtiments d'habitation.",
    description: [
      "Tube isolant, Cintrable, avec tire-fil en acier galvanisé, utilisable dans les installations électriques des bâtiments d'habitation.",
      "Tirage facile des câbles grâce au fil d'acier galvanisé.",
    ],
    category: "produits",
    categoryLabel: "Produits PVC",
    image: "/images/products/tube-annule.png",
    availability: "En stock",
  },
  {
    sourceId: 5,
    slug: "rotor-et-stator",
    name: "Rotor et Stator",
    shortDescription:
      "Rotor et Stator pour machine de projection de plâtre et de mortier PFT monophasé et triphasé.",
    description: [
      "Nous mettons en vente des rotors et stators pour machines de projection de plâtre et de mortier, compatibles avec les machines PFT monophasées et triphasées.",
      "Ces pièces détachées sont également adaptées à toutes les marques de machines de pulvérisation.",
    ],
    category: "accessoires",
    categoryLabel: "Accessoires",
    image: "/images/products/rotor-et-stator.png",
    availability: "En stock",
  },
  {
    sourceId: 8,
    slug: "grattoir-enduit-aluminium",
    name: "Grattoir à enduit en aluminium",
    shortDescription:
      "Outil essentiel utilisé dans les travaux de finition et de réparation des surfaces murales.",
    description: [
      "Le grattoir à enduit en aluminium est un outil robuste et léger, fabriqué en aluminium pour assurer à la fois durabilité et facilité d'utilisation.",
      "Il est généralement doté d'une lame en métal solide, souvent biseautée, idéale pour gratter et lisser les enduits et les mastics appliqués sur les murs. Sa poignée ergonomique permet une prise en main confortable et précise.",
    ],
    category: "accessoires",
    categoryLabel: "Accessoires",
    image: "/images/products/Grattoir-a-enduit-en-aluminium.png",
    availability: "En stock",
  },
  {
    sourceId: 9,
    slug: "platoir-eponge-caoutchouc",
    name: "Platoir en éponge caoutchouc",
    shortDescription:
      "Outil polyvalent et efficace pour les professionnels du bâtiment, facilitant l'application et le lissage des enduits.",
    description: [
      "Un platoir en éponge caoutchouc est un outil utilisé principalement dans le domaine de la construction et du bricolage pour appliquer et lisser les enduits, les mastics, et les matériaux similaires sur les surfaces.",
    ],
    category: "accessoires",
    categoryLabel: "Accessoires",
    image: "/images/products/platoir-eponge-caoutchouc.png",
    availability: "En stock",
  },
  {
    sourceId: 10,
    slug: "truelle",
    name: "Truelle",
    shortDescription:
      "Outil polyvalent et indispensable dans de nombreux travaux de construction et de jardinage.",
    description: [
      "Application de mortier : les maçons utilisent la truelle pour appliquer et lisser le mortier ou le ciment sur les briques, les pierres et les blocs de construction.",
      "Création de joints : elle est utilisée pour créer des joints entre les briques ou les pierres, assurant ainsi une finition lisse et uniforme.",
    ],
    category: "accessoires",
    categoryLabel: "Accessoires",
    image: "/images/products/truelles.jpg",
    availability: "En stock",
  },
  {
    sourceId: 11,
    slug: "taloche",
    name: "Taloche",
    shortDescription:
      "Outil à main utilisé pour lisser et égaliser des enduits tels que le plâtre, le ciment ou d'autres mortiers.",
    description: [
      "Une taloche est un outil à main utilisé principalement pour lisser et égaliser des enduits tels que le plâtre, le ciment, ou d'autres mortiers. Elle est composée d'une large plaque plate en métal, en plastique ou en bois, fixée à un manche court.",
    ],
    specifications: [
      "Plâtrage des murs et plafonds : appliquer et lisser le plâtre sur les surfaces afin de créer une finition lisse et uniforme",
      "Enduits de façade : étaler et lisser les enduits extérieurs tels que le crépi ou le mortier de ciment",
      "Lissage des joints entre plaques de plâtre ou briques",
      "Création de textures décoratives sur les surfaces enduites (versions éponge / caoutchouc)",
    ],
    category: "accessoires",
    categoryLabel: "Accessoires",
    image: "/images/products/taloche-plastique-manche-bois.jpg",
    availability: "En stock",
  },
  {
    sourceId: 12,
    slug: "batteur-g4",
    name: "Batteur G4",
    shortDescription:
      "Mélangeur robuste et efficace utilisé principalement dans les travaux de construction et de rénovation.",
    description: [
      "Un Batteur G4 est un mélangeur robuste et efficace utilisé principalement dans les travaux de construction et de rénovation pour mélanger divers matériaux de construction.",
    ],
    category: "accessoires",
    categoryLabel: "Accessoires",
    image: "/images/products/batteur.jpg",
    availability: "En stock",
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);
