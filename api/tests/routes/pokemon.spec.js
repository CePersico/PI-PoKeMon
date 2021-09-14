/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
});

// Test de mas rutas:

describe('Details Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons/:id', () => {
    it('should get 200', () =>
      agent.get('/pokemons/98').expect(200)
      .expect('Content-Type', /json/)
    );
  });
});


describe('Types routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {expect(Array.isArray(res.body)).to.eql(true);
        })
      );
  });
});

describe('Post Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('POST /pokemons', () => {
    it('should get 200', () =>
      agent.post('/pokemons').send(pokemon)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body.name).to.eql('testPost');
        })
    );
  });
});