export type Article = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  author: string;
  time: string;
  date: string; // ISO
  img: string;
  body: string[];
};

export const CATEGORIES = ["Tous", "Auto & IARDT", "Santé", "Personnes & Vie", "Entreprise", "Conseils"] as const;

export const ARTICLES: Article[] = [
  {
    slug: "choisir-assurance-automobile-cameroun-2026",
    cat: "Auto & IARDT",
    title: "Comment choisir son assurance automobile au Cameroun en 2026",
    excerpt: "Tiers, tiers étendu, tous risques : décryptage des formules, des plafonds et des pièges à éviter.",
    author: "Paul B.",
    time: "6 min",
    date: "2026-01-15",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    body: [
      "L'assurance automobile au Cameroun est encadrée par le Code CIMA. La responsabilité civile reste obligatoire : circuler sans elle expose à des sanctions financières et à la mise en fourrière.",
      "Au-delà du minimum légal, trois grandes formules structurent le marché : tiers simple, tiers étendu (vol, incendie, bris de glaces) et tous risques. Le choix dépend principalement de la valeur vénale du véhicule.",
      "Pour un véhicule neuf ou récent, la formule tous risques est généralement recommandée. Pour un véhicule de plus de 7 ans, un tiers étendu offre souvent le meilleur rapport couverture/prime.",
      "Avant de souscrire, vérifiez les plafonds d'indemnisation, les franchises et les exclusions. Demandez systématiquement un devis comparatif : votre courtier DIRECT INSURANCE vous aidera à arbitrer.",
    ],
  },
  {
    slug: "assurance-maladie-individuelle-familiale",
    cat: "Santé",
    title: "Tout savoir sur l'assurance maladie individuelle et familiale",
    excerpt: "Cotisations, plafonds, réseaux de soins, prise en charge : guide complet pour choisir sa complémentaire santé.",
    author: "Dr. Ngono",
    time: "8 min",
    date: "2026-02-02",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    body: [
      "L'assurance maladie privée comble les lacunes de la protection sociale et donne accès à un réseau de cliniques privées au Cameroun et à l'étranger.",
      "Quatre familles de garanties à examiner : hospitalisation, consultations & pharmacie, dentaire & optique, et soins à l'étranger.",
      "Les contrats famille incluent souvent une dégressivité tarifaire à partir du troisième ayant droit. Pour les TPE et PME, un contrat collectif permet d'attirer et de fidéliser les talents.",
      "Comparez surtout les plafonds annuels, le délai de carence, le taux de prise en charge et la qualité du réseau de soins partenaires.",
    ],
  },
  {
    slug: "progespa-gestion-patrimoine-assurance",
    cat: "Entreprise",
    title: "PROGESPA : le programme de gestion de patrimoine d'assurance",
    excerpt: "Comment DIRECT INSURANCE pilote la totalité des contrats d'une entreprise pour optimiser couverture et budget.",
    author: "Marc T.",
    time: "7 min",
    date: "2026-02-20",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    body: [
      "PROGESPA est notre programme dédié de Gestion de Patrimoine d'Assurance. Il s'adresse aux entreprises qui souhaitent une vision consolidée de leurs risques et de leurs contrats.",
      "L'approche se décline en trois temps : audit initial, plan d'action et pilotage continu. Chaque trimestre, un reporting clair fait remonter l'évolution du risque et du budget.",
      "Bénéfice clé : éviter les doublons de garantie et combler les angles morts. Sur certains portefeuilles, nous observons jusqu'à 15 % d'économies à couverture équivalente.",
      "PROGESPA est compatible avec tous les assureurs présents au Cameroun. Notre indépendance garantit l'absence de conflit d'intérêt.",
    ],
  },
  {
    slug: "assurance-voyage-couverture-deplacements",
    cat: "Conseils",
    title: "Assurance voyage : êtes-vous bien couvert lors de vos déplacements ?",
    excerpt: "Visa Schengen, rapatriement, bagages : les garanties indispensables avant tout déplacement professionnel ou personnel.",
    author: "Christelle N.",
    time: "5 min",
    date: "2026-03-05",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Une assurance voyage couvre les frais médicaux, le rapatriement sanitaire, la perte ou le retard de bagages et l'annulation du voyage.",
      "Pour un visa Schengen, l'attestation doit garantir un minimum de 30 000 € de frais médicaux et inclure le rapatriement.",
      "Pour les déplacements en Afrique, vérifiez la couverture en zone CEMAC et la prise en charge dans le pays visité.",
      "Astuce : pour les voyageurs fréquents, une formule annuelle multi-voyages revient souvent moins cher que des achats à l'unité.",
    ],
  },
  {
    slug: "rente-education-securiser-avenir-enfants",
    cat: "Personnes & Vie",
    title: "Rente éducation : sécurisez l'avenir scolaire de vos enfants",
    excerpt: "Un outil patrimonial puissant pour financer études supérieures et formations, même en cas de coup dur.",
    author: "Hortense F.",
    time: "6 min",
    date: "2026-03-20",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    body: [
      "La rente éducation est un produit de prévoyance qui verse une rente à vos enfants pour financer leurs études, en cas de décès ou à terme.",
      "Le mécanisme est simple : vous versez des cotisations périodiques modulables. Au terme, l'enfant perçoit une rente sur 4 à 8 ans.",
      "Avantage fiscal : la rente bénéficie souvent d'un cadre social et fiscal favorable selon votre situation.",
      "Souscrire jeune permet de lisser les primes et d'accumuler un capital plus important. Parlez-en à votre conseiller DIRECT INSURANCE.",
    ],
  },
  {
    slug: "audit-assurances-pourquoi-entreprise",
    cat: "Entreprise",
    title: "Audit des assurances : pourquoi votre entreprise doit s'y soumettre",
    excerpt: "Un diagnostic indépendant pour identifier doublons, sur-assurances et zones de risque non couvertes.",
    author: "Sarah K.",
    time: "5 min",
    date: "2026-04-02",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    body: [
      "L'audit des assurances cartographie l'ensemble des contrats de l'entreprise et les confronte à la réalité des risques.",
      "Trois constats récurrents : des doublons de garantie, des sur-assurances coûteuses, et des angles morts critiques (cyber-risque, perte d'exploitation).",
      "L'audit débouche sur un plan d'action priorisé, avec une estimation des économies possibles et des couvertures à ajouter.",
      "Indépendant de tout assureur, l'audit DIRECT INSURANCE est livré sous 4 à 6 semaines selon la taille du portefeuille.",
    ],
  },
];
