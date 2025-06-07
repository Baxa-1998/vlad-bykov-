const { faker } = require('@faker-js/faker');
const compositions = ['crocodile skin', 'italian cotton', 'italian flax'];
const collections = [
  'Himalaya shoes',
  'Mules',
  'Loafers',
  'Double-breasted shirt (jacket)',
  'Suit LORO PIANA',
];
const images = [
  '/img/collections/Collection1.svg',
  '/img/collections/Collection2.svg',
  '/img/collections/Collection3.svg',
  '/img/collections/Collection4.svg',
  '/img/collections/Collection5.svg',
];
const colors = ['purpure', 'yellow', 'orange', 'black', 'white'];
module.exports = {
  async up(db, client) {
    return db.collection('cloth').insertMany([...Array(50).map(()=>{
      
    })]);
  },

  async down(db) {
    return db.collection('cloth').updateMany([]);
  },
};
