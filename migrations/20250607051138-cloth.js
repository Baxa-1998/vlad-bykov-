const { faker } = require('@faker-js/faker');

const compositions = ['crocodile skin', 'italian cotton', 'italian flax'];
const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomColorArray = (arr, count = 3) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * count) + 1);
};

const getRandomArrayValues = (arr, maxCount = 5) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * maxCount) + 1;
  return shuffled.slice(0, count);
};

const collections = [
  'Himalaya shoes',
  'Mules',
  'Loafers',
  'Double-breasted shirt (jacket)',
  'Suit LORO PIANA',
];
const types = ['men', 'women'];
const categories = ['cloth', 'outerwear', 'shoes', 'accessories'];
const images = [
  '/img/collections/Collection1.svg',
  '/img/collections/Collection2.svg',
  '/img/collections/Collection3.svg',
  '/img/collections/Collection4.svg',
  '/img/collections/Collection5.svg',
];
const colors = ['purpure', 'yellow', 'orange', 'black', 'white', 'green', 'blue'];

const getShoeSizes = () => {
  const sizes = [];
  for (let size = 39; size <= 45; size++) {
    if (Math.random() > 0.3) sizes.push(size);
  }
  return sizes;
};

module.exports = {
  async up(db) {
    const items = [];

    types.forEach((type) => {
      categories.forEach((category) => {
        for (let i = 0; i < 10; i++) {
          const isShoes = category === 'shoes';

          items.push({
            category,
            type,
            price: +faker.string.numeric(5),
            name: faker.lorem.words(2),
            description: faker.lorem.sentence(15),
            characteristics: {
              colors: getRandomColorArray(colors, 3), // 👈 массив цветов
              compositions: getRandomArrayValue(compositions),
              collection: getRandomArrayValue(collections),
            },
            img: getRandomArrayValues(images,5),
            isNew: faker.datatype.boolean(),
            inStock: faker.string.numeric(2),
            sizes: isShoes
              ? getShoeSizes()
              : {
                  s: faker.datatype.boolean(),
                  m: faker.datatype.boolean(),
                  l: faker.datatype.boolean(),
                  xl: faker.datatype.boolean(),
                  xll: faker.datatype.boolean(),
                  xlll: faker.datatype.boolean(),
                },
          });
        }
      });
    });

    return db.collection('cloth').insertMany(items);
  },

  async down(db) {
    return db.collection('cloth').deleteMany({});
  },
};