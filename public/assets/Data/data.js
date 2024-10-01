const animals = {
  birds: [
    {
      name: "Cassowary",
      link: "/birds/cassowary",
      lifespan: "20 years",
      group: "bird",
      food: "Plants matter like fruit, insects and small animals like mice and lizards",
      description:
        "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
      length: "1.7m",
      weight: "44kg",
      found: "Queensland",
    },
    {
      name: "Kookaburra",
      link: "/birds/kookaburra",
      lifespan: "20 years",
      group: "bird",
      food: "Insects and small animals including snakes, frogs and lizards",
      description:
        "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
      length: "43cm",
      weight: "300g",
      found: "Australia wide",
    },
    {
      name: "Cockatoo",
      link: "/birds/cockatoo",
      fullName: "Yellow-tailed black cockatoo",
      lifespan: "41 years",
      group: "bird",
      food: "Fruit, seeds and other plant material",
      description:
        "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
      length: "65 cm",
      weight: "900 grams",
      found: "SE Australia",
    },
  ],
  mammals: [
    {
      name: "Echidna",
      link: "/mammals/echidna",
      lifespan: "50 years",
      group: "mammals",
      food: "Insects such as ants and termites, beetle larvae and worms",
      description:
        "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
      length: "76cm",
      weight: "10kg",
      found: "Throughout Australia",
    },
    {
      name: "Tasmanian devil",
      link: "/mammals/tasmanian_devil",
      lifespan: "5 years",
      group: "mammals",
      food: "A predator, then eat meat from other animals such as wallabies and wombats",
      description:
        "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
      length: "70cm",
      weight: "10kg",
      found: "Tasmania",
    },
    {
      name: "Quokka",
      link: "/mammals/quokka",
      lifespan: "10 years",
      group: "mammals",
      food: "Plant eaters, they munch on shrubs and grasses",
      description:
        "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
      length: "50cm",
      weight: "3kg",
      found:
        "Only found on Rottnest Island and a few places on mainland Western Australia",
    },
  ],
  reptiles: [
    {
      name: "Frill-necked lizard",
      link: "/reptiles/frill_necked_lizard",
      lifespan: "20 years",
      group: "reptile",
      food: "Small insects and spiders",
      description:
        "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
      length: "90cm",
      weight: "1 kg",
      found: "Northern Australia",
    },
    {
      name: "Hawksbill turtle",
      link: "/reptiles/hawksbill_turtle",
      lifespan: "50 years",
      group: "reptile",
      food: "Other animals (sponges & jellyfish), sea plants",
      description:
        "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
      length: "80cm (carapace)",
      weight: "50kg",
      found:
        "Tropical coasts of Queensland, Northern Territory and Western Australia",
    },
    {
      name: "Perentie",
      link: "/reptiles/perentie",
      lifespan: "20 years",
      group: "reptile",
      food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
      description:
        "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
      length: "2.5 m",
      weight: "20kg",
      found: "Deserts",
    },
  ],
};

const { birds, mammals, reptiles } = animals;
export { birds, mammals, reptiles, animals };

export const categories = [
  {
    name: "Birds",
    link: "/birds",
    p1: "Our bird exhibits offer a window into one of the most diverse and widespread groups of animals on Earth, with species ranging from the large and flightless cassowary to the laughing kookaburra, whose distinctive call echoes through the forest. Birds are characterized by their feathers, which not only enable flight but also provide insulation and play a role in mating displays. The yellow-tailed black cockatoo, for example, uses its striking plumage and loud, wailing call to communicate with others of its kind. Birds have evolved a wide range of beak shapes and sizes to suit their diets, whether they are hunting insects or cracking open seeds. The kookaburra, with its long, sharp beak, catches small vertebrates like lizards and snakes, while the cassowary uses its strong legs and helmet-like casque to navigate through dense rainforests.",
    p2: "At our zoo, you'll discover the science behind these incredible adaptations and learn about the vital roles birds play in ecosystems across the globe. Birds are important pollinators, seed dispersers, and even predators, helping to control insect and rodent populations. By observing their behaviors up close, from their flight patterns to their nesting habits, you can gain insight into the fascinating life cycles of birds and their complex social structures. Many bird species are facing threats due to habitat loss and climate change, making conservation efforts crucial. When you visit our bird exhibits, you'll not only enjoy their beauty and grace but also come away with a deeper understanding of their ecological importance and the urgent need to protect them for future generations.",
  },
  {
    name: "Mammals",
    link: "/mammals",
    p1: "Mammals at our zoo provide a fascinating glimpse into the complexity of life on Earth, offering visitors the chance to see a wide range of species that highlight the adaptability of these warm-blooded creatures. Unlike reptiles and birds, mammals are distinguished by their ability to produce milk to nourish their young, and most species give birth to live offspring. From the spiny echidna, one of the few egg-laying mammals, to the tenacious Tasmanian devil, known for its powerful bite, mammals demonstrate remarkable evolutionary strategies. These animals have developed fur or hair to help regulate body temperature, allowing them to thrive in environments ranging from arid deserts to frozen tundras. The quokka, for instance, is a small herbivore with a charming smile that plays a crucial role in dispersing seeds, contributing to the balance of the ecosystems they inhabit.",
    p2: "When you visit the mammals at our zoo, you'll not only be enchanted by their unique behaviors but also learn how vital they are to the health of the planet. Many species are integral to their habitats, whether through pollination, seed dispersal, or as top predators controlling other animal populations. Our exhibits offer a rare opportunity to observe these creatures up close and understand the scientific significance behind their adaptations. From social structures in groups of animals to the solitary lives of others, mammals display a remarkable range of lifestyles. A trip to the zoo isn’t just a fun family outing; it’s a chance to delve into the evolutionary history and ecological importance of some of the most captivating creatures on Earth.",
  },
  {
    name: "Reptiles",
    link: "/reptiles",
    p1: "The reptiles at our zoo are a living connection to the age of dinosaurs, with species that have survived and adapted for millions of years. Unlike mammals, reptiles are ectothermic, meaning they rely on their surroundings to regulate their body temperature. This trait has allowed them to conquer a wide variety of environments, from the sweltering deserts to the tropical rainforests. For example, the powerful perentie, Australia's largest lizard, uses its sharp claws and strong limbs to hunt prey like small mammals and birds. Meanwhile, the hawksbill turtle, with its distinctive beak-like mouth, plays a crucial role in maintaining coral reef ecosystems by controlling the population of sponges. These reptiles have adapted unique survival strategies, from the defensive frills of the frill-necked lizard to the incredible navigation skills of sea turtles that migrate thousands of miles.",
    p2: "A visit to our reptile exhibit will not only spark your curiosity about these ancient creatures but also deepen your understanding of their role in the natural world. Many reptiles are apex predators or key species that help regulate ecosystems by controlling pest populations or maintaining habitat balance. You'll discover how reptiles like the hawksbill turtle are critically endangered due to human activity, highlighting the importance of conservation efforts. By learning about their biology and behavior, you’ll gain a new appreciation for how these seemingly cold and distant creatures are an essential part of our planet's biodiversity. Come face-to-face with reptiles that have mastered the art of survival, and walk away with a newfound respect for these ancient, resilient animals.",
  },
];
