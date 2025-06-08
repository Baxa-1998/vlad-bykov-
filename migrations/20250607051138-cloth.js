const { faker } = require('@faker-js/faker');
const compositions = ['crocodile skin', 'italian cotton', 'italian flax'];
const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

const collections = [
  'Himalaya shoes',
  'Mules',
  'Loafers',
  'Double-breasted shirt (jacket)',
  'Suit LORO PIANA',
];
const collectionTypes = ['men', 'women', 'new'];
const images = [
  '/img/collections/Collection1.svg',
  '/img/collections/Collection2.svg',
  '/img/collections/Collection3.svg',
  '/img/collections/Collection4.svg',
  '/img/collections/Collection5.svg',
];
const colors = ['purpure', 'yellow', 'orange', 'black', 'white'];

module.exports = {
  async up(db) {
    return db.collection('cloth').insertMany(
      [...Array(30)].map(() => {
        const type = getRandomArrayValue(collectionTypes);
        const characteristics = [
          {
            type: 'men',
            color: getRandomArrayValue(colors),
            compositions: getRandomArrayValue(compositions),
            collection: getRandomArrayValue(collections),
          },
          {
            type: 'women',
            color: getRandomArrayValue(colors),
            compositions: getRandomArrayValue(compositions),
            collection: getRandomArrayValue(collections),
          },
          {
            type: 'new',
            color: getRandomArrayValue(colors),
            compositions: getRandomArrayValue(compositions),
            collection: getRandomArrayValue(collections),
          },
        ];
        const currentCharacteristics = characteristics.find((item) => item.type === type);

        return {
          category: 'cloth',
          type,
          price: +faker.string.numeric(5),
          name: faker.lorem.sentence(2),
          description: faker.lorem.sentence(20),
          characteristics: currentCharacteristics,
          img: getRandomArrayValue(images),
          isNew: faker.datatype.boolean(),
          inStock: faker.string.numeric(2),
          sizes: {
            s: faker.datatype.boolean(),
            l: faker.datatype.boolean(),
            xl: faker.datatype.boolean(),
            xll: faker.datatype.boolean(),
            xlll: faker.datatype.boolean(),
          },
        };
      }),
    );
  },

  async down(db) {
    return db.collection('cloth').updateMany([]); // или другое логичное действие
  },
};
