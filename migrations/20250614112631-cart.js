module.exports = {

  async up(db, client) {
    db.createCollection('cart')
  },


  async down(db, client) {
  db.collection('cart').drop()
  }
};
