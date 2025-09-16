export interface TopAttraction {
  name: string;
  address: string;
  description: string;
  schedule: string;
  averageTime: string;
  website: string;
  image: string;
  latitude: number;
  longitude: number;
}

export const TOP_ATTRACTIONS: TopAttraction[] = [
  {
    name: 'Palace of the Parliament',
    address: 'Strada Izvor 2-4, Bucharest',
    description: 'The world’s heaviest building and the seat of the Romanian Parliament, built during the Ceaușescu era.',
    schedule: 'Mon–Sun: 10:00 – 16:00 (guided tours only)',
    averageTime: '1–2 hours',
    website: 'https://cic.cdep.ro/en',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bucharest_-_Palace_of_the_Parliament_%282024%29_%282%29.jpg/1920px-Bucharest_-_Palace_of_the_Parliament_%282024%29_%282%29.jpg',
    latitude: 44.4275,
    longitude: 26.0875
  },
  {
    name: 'Romanian Athenaeum',
    address: 'Strada Benjamin Franklin 1-3, Bucharest',
    description: 'A stunning concert hall and a symbol of Romanian culture, famous for its circular architecture.',
    schedule: 'Tours vary; check schedule',
    averageTime: '1 hour',
    website: 'https://www.fge.org.ro/en/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg/1024px-Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg',
    latitude: 44.4410,
    longitude: 26.0976
  },
  {
    name: 'Village Museum (Muzeul Satului)',
    address: 'Șoseaua Pavel D. Kiseleff 28-30, Bucharest',
    description: 'Open-air museum of traditional Romanian village life with houses and artifacts from all regions.',
    schedule: 'Tue–Sun: 09:00 – 17:00 (closed Mon)',
    averageTime: '2–3 hours',
    website: 'https://muzeul-satului.ro/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/RO_B_Village_museum_Dumbraveni_homestead_2.jpg/1024px-RO_B_Village_museum_Dumbraveni_homestead_2.jpg',
    latitude: 44.4728,
    longitude: 26.0805
  },
  {
    name: 'Old Town (Centrul Vechi)',
    address: 'Lipscani District, Bucharest',
    description: 'Historic quarter with cobblestones, nightlife, restaurants, and landmarks.',
    schedule: 'Always accessible',
    averageTime: '2–4 hours',
    website: 'https://bucharestoldtown.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bucharest_-_BNR_Palace_%28right%29_%2814696888383%29.jpg/1024px-Bucharest_-_BNR_Palace_%28right%29_%2814696888383%29.jpg',
    latitude: 44.4314,
    longitude: 26.1025
  },
  {
    name: 'Revolution Square (Piața Revoluției)',
    address: 'Calea Victoriei, Bucharest',
    description: 'Site of the 1989 Revolution, near the Royal Palace and Athenaeum.',
    schedule: 'Always accessible',
    averageTime: '30–60 minutes',
    website: 'https://romaniatourism.com/bucharest.html',
    image: 'https://upload.wikimedia.org/wikipedia/ro/thumb/2/28/Piata_Revolutiei%2C_Statuia_lui_Carol.jpg/1024px-Piata_Revolutiei%2C_Statuia_lui_Carol.jpg',
    latitude: 44.4416,
    longitude: 26.0963
  },
  {
    name: 'National Museum of Art of Romania',
    address: 'Calea Victoriei 49-53, Bucharest',
    description: 'Largest Romanian art collection, housed in the former Royal Palace.',
    schedule: 'Wed–Sun: 10:00 – 18:00 (closed Mon–Tue)',
    averageTime: '1–2 hours',
    website: 'https://mnar.ro/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Muzeul_National_de_Arta%2C_Bucuresti.jpg/1024px-Muzeul_National_de_Arta%2C_Bucuresti.jpg',
    latitude: 44.4406,
    longitude: 26.0969
  },
  {
    name: 'Stavropoleos Monastery',
    address: 'Strada Stavropoleos 4, Bucharest',
    description: '18th-century monastery with Brâncovenesc architecture and frescoes.',
    schedule: 'Daily: 09:00 – 17:00',
    averageTime: '30–45 minutes',
    website: 'http://www.stavropoleos.ro/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Stavropoleos_Monastery.jpg/1024px-Stavropoleos_Monastery.jpg',
    latitude: 44.4323,
    longitude: 26.0998
  },
  {
    name: 'Cișmigiu Gardens',
    address: 'Bulevardul Regina Elisabeta, Bucharest',
    description: 'Oldest public garden in Bucharest with a lake and walking paths.',
    schedule: 'Daily: 06:00 – 22:00',
    averageTime: '1–2 hours',
    website: 'https://romaniatourism.com/bucharest.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Cismigiu-Garden-Bucharest-3.jpg',
    latitude: 44.4360,
    longitude: 26.0970
  },
  {
    name: 'Cotroceni Palace & Museum',
    address: 'Bulevardul Geniului 1, Bucharest',
    description: 'Presidential residence and museum of history & art.',
    schedule: 'Tue–Sun: 09:30 – 17:30 (guided tours)',
    averageTime: '1–2 hours',
    website: 'https://www.muzeulcotroceni.ro/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cotroceni_Palace_Garden_-_Bucharest_07.jpg/1024px-Cotroceni_Palace_Garden_-_Bucharest_07.jpg',
    latitude: 44.4350,
    longitude: 26.0614
  },
  {
    name: 'National Museum of Romanian History',
    address: 'Calea Victoriei 12, Bucharest',
    description: 'Romania’s history museum with Trajan’s Column replica and Crown Jewels.',
    schedule: 'Wed–Sun: 10:00 – 18:00 (closed Mon–Tue)',
    averageTime: '1–2 hours',
    website: 'http://www.mnir.ro/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Museo_Nacional_de_Historia_de_Ruman%C3%ADa%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_63.jpg/1024px-Museo_Nacional_de_Historia_de_Ruman%C3%ADa%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_63.jpg',
    latitude: 44.4310,
    longitude: 26.0979
  }
];
