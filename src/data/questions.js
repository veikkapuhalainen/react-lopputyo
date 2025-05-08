const questions = [
  //URHEILU
  {
    category: "Urheilu",
    question: "Kuka on voittanut eniten jalkapallon Ballon d'Or -palkintoja?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane", "Ronaldinho"],
    correctAnswer: "Lionel Messi"
  },
  {
    category: "Urheilu",
    question: "Missä kaupungissa järjestettiin kesäolympialaiset vuonna 2012?",
    options: ["Ateena", "Tokio", "Lontoo", "Peking"],
    correctAnswer: "Lontoo"
  },
  {
    category: "Urheilu",
    question: "Kuinka monta pelaajaa on jääkiekkojoukkueella kentällä normaalisti?",
    options: ["5", "6", "7", "4"],
    correctAnswer: "6"
  },
  {
    category: "Urheilu",
    question: "Mikä on tenniksen suurin ruohokentällä pelattava turnaus?",
    options: ["Australian Open", "US Open", "French Open", "Wimbledon"],
    correctAnswer: "Wimbledon"
  },
  {
    category: "Urheilu",
    question: "Minkä värinen kortti jalkapallossa tarkoittaa ulosajoa?",
    options: ["Keltainen", "Punainen", "Sininen", "Musta"],
    correctAnswer: "Punainen"
  },
  {
    category: "Urheilu",
    question: "Montako reikää golfkentällä yleensä on?",
    options: ["9", "12", "18", "24"],
    correctAnswer: "18"
  },
  {
    category: "Urheilu",
    question: "Mikä maa on voittanut eniten jalkapallon miesten MM-kisoja?",
    options: ["Saksa", "Italia", "Brasilia", "Argentiina"],
    correctAnswer: "Brasilia"
  },
  {
    category: "Urheilu",
    question: "Missä lajissa kilpaillaan Stanley Cup -pokaalista?",
    options: ["Baseball", "Koripallo", "Jääkiekko", "Amerikkalainen jalkapallo"],
    correctAnswer: "Jääkiekko"
  },
  {
    category: "Urheilu",
    question: "Kuka suomalainen voitti yhdistetyssä kultaa Salt Lake Cityssä 2002?",
    options: ["Mika Myllylä", "Iivo Niskanen", "Ville Nousiainen", "Samppa Lajunen"],
    correctAnswer: "Samppa Lajunen"
  },
  {
    category: "Urheilu",
    question: "Minkä värinen vyö on korkein judossa?",
    options: ["Valkoinen", "Punainen", "Ruskea", "Musta"],
    correctAnswer: "Punainen"
  },

  //HISTORIA 
  {
    category: "Historia",
    question: "Milloin toinen maailmansota päättyi?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: "1945"
  },
  {
    category: "Historia",
    question: "Kuka oli Neuvostoliiton johtaja toisen maailmansodan aikana?",
    options: ["Lenin", "Gorbatsov", "Stalin", "Putin"],
    correctAnswer: "Stalin"
  },
  {
    category: "Historia",
    question: "Missä kaupungissa kaatui muuri vuonna 1989?",
    options: ["Berliini", "Lontoo", "Pariisi", "Moskova"],
    correctAnswer: "Berliini"
  },
  {
    category: "Historia",
    question: "Kuka oli ensimmäinen Yhdysvaltain presidentti?",
    options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
    correctAnswer: "George Washington"
  },
  {
    category: "Historia",
    question: "Mihin maahan Napoleon Bonaparte karkotettiin viimeiseksi?",
    options: ["Elba", "Malta", "St. Helena", "Korsika"],
    correctAnswer: "St. Helena"
  },
  {
    category: "Historia",
    question: "Mikä tapahtuma aloitti ensimmäisen maailmansodan?",
    options: ["Berliinin muurin rakentaminen", "Franz Ferdinandin salamurha", "Hitlerin valtaannousu", "Pearl Harborin hyökkäys"],
    correctAnswer: "Franz Ferdinandin salamurha"
  },
  {
    category: "Historia",
    question: "Kuka hallitsi antiikin Egyptiä ja tunnetaan kauneudestaan?",
    options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Tutankhamon"],
    correctAnswer: "Cleopatra"
  },
  {
    category: "Historia",
    question: "Mikä oli Rooman valtakunnan kieli?",
    options: ["Kreikka", "Italia", "Latina", "Ranska"],
    correctAnswer: "Latina"
  },
  {
    category: "Historia",
    question: "Kuka johti natsipuoluetta Saksassa?",
    options: ["Stalin", "Hitler", "Churchill", "Mussolini"],
    correctAnswer: "Hitler"
  },
  {
    category: "Historia",
    question: "Milloin Suomen itsenäisyyspäivää vietetään?",
    options: ["5.12.", "6.12.", "7.12.", "4.12."],
    correctAnswer: "6.12."
  },

  //TIEDE
  {
    category: "Tiede",
    question: "Mikä alkuaine on kemialliselta merkiltään O?",
    options: ["Osmium", "Oksidi", "Otsoni", "Happi"],
    correctAnswer: "Happi"
  },
  {
    category: "Tiede",
    question: "Mikä on veden kiehumispiste normaalipaineessa?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    correctAnswer: "100°C"
  },
  {
    category: "Tiede",
    question: "Mitä mittaa mittayksikkö 'Newton'?",
    options: ["Massa", "Pituus", "Voima", "Aika"],
    correctAnswer: "Voima"
  },
  {
    category: "Tiede",
    question: "Kuka keksi yleisen suhteellisuusteorian?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: "Albert Einstein"
  },
  {
    category: "Tiede",
    question: "Mikä on ihmiskehon suurin elin?",
    options: ["Maksa", "Aivot", "Iho", "Keuhkot"],
    correctAnswer: "Iho"
  },
  {
    category: "Tiede",
    question: "Kuinka monta kromosomia ihmisellä on?",
    options: ["23", "46", "92", "64"],
    correctAnswer: "46"
  },
  {
    category: "Tiede",
    question: "Mikä planeetta on lähimpänä aurinkoa?",
    options: ["Venus", "Merkurius", "Mars", "Jupiter"],
    correctAnswer: "Merkurius"
  },
  {
    category: "Tiede",
    question: "Mitä on H2O?",
    options: ["Suola", "Happi", "Vesi", "Hiilidioksidi"],
    correctAnswer: "Vesi"
  },
  {
    category: "Tiede",
    question: "Mikä eläin on nisäkäs mutta munii?",
    options: ["Krokotiili", "Ankka", "Vesinokkaeläin", "Kilpikonna"],
    correctAnswer: "Vesinokkaeläin"
  },
  {
    category: "Tiede",
    question: "Mikä on valon nopeus tyhjiössä?",
    options: ["300 000 km/s", "150 000 km/s", "450 000 km/s", "100 000 km/s"],
    correctAnswer: "300 000 km/s"
  },

  //MAANTIEDE
  {
    category: "Maantiede",
    question: "Mikä on maailman suurin valtameri?",
    options: ["Intian valtameri", "Atlantin valtameri", "Tyynimeri", "Jäämeri"],
    correctAnswer: "Tyynimeri"
  },
  {
    category: "Maantiede",
    question: "Missä maassa sijaitsee Eiffel-torni?",
    options: ["Italia", "Ranska", "Espanja", "Saksa"],
    correctAnswer: "Ranska"
  },
  {
    category: "Maantiede",
    question: "Mikä on Etelä-Amerikan suurin joki?",
    options: ["Amazon", "Paraná", "Orinoco", "Madeira"],
    correctAnswer: "Amazon"
  },
  {
    category: "Maantiede",
    question: "Missä valtiossa sijaitsee Kilimanjaro-vuori?",
    options: ["Kenia", "Tansania", "Uganda", "Etiopia"],
    correctAnswer: "Tansania"
  },
  {
    category: "Maantiede",
    question: "Mikä on maailman väkirikkain maa?",
    options: ["Intia", "Yhdysvallat", "Indonesia", "Kiina"],
    correctAnswer: "Intia"
  },
  {
    category: "Maantiede",
    question: "Mikä on Australian pääkaupunki?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra"
  },
  {
    category: "Maantiede",
    question: "Mikä on Euroopan pisin joki?",
    options: ["Tonava", "Volga", "Seine", "Loire"],
    correctAnswer: "Volga"
  },
  {
    category: "Maantiede",
    question: "Mikä on maailman korkein vuori?",
    options: ["K2", "Everest", "Makalu", "Elbrus"],
    correctAnswer: "Everest"
  },
  {
    category: "Maantiede",
    question: "Mikä on Islannin pääkaupunki?",
    options: ["Akureyri", "Reykjavik", "Hafnarfjörður", "Kópavogur"],
    correctAnswer: "Reykjavik"
  },
  {
    category: "Maantiede",
    question: "Missä maanosassa on Sahara-aavikko?",
    options: ["Aasia", "Etelä-Amerikka", "Afrikka", "Australia"],
    correctAnswer: "Afrikka"
  }
];

export default questions;