const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../config/server/server');

//assertion style

chai.use(chaiHttp);

describe('Test store API', () => {
  //test POST route
  describe('POST /store', () => {
    it('It should POST a new store', (done) => {
      const store = {
        cnpj: '12345678910113',
        address: 'Testing Street',
        email: 'testing@test.com',
        telephoneNumber: '(21) 8888-9999',
        headcount: 25,
      };
      chai
        .request(server)
        .post('/store')
        .send(store)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          expect(res.body).to.have.a.property('message');
          done();
        });
    });

    it('It should NOT POST a new store without completing the necessary fields', (done) => {
      const cnpj = {
        cnpj: 123456,
      };
      chai
        .request(server)
        .post('/store')
        .send(cnpj)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res).to.be.a('object');
          expect(res.body)
            .to.have.a.property('message')
            .to.include('CNPJ invalid, try again');
          done();
        });
    });
  });
  //test GET route

  describe('GET /store', () => {
    it('It should GET all the stores', (done) => {
      chai
        .request(server)
        .get('/store')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          done();
        });
    });
    it('It should  NOT GET all the stores', (done) => {
      chai
        .request(server)
        .get('/stor')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
  //test GET (by cnpj) route
  describe('GET /store/:cnpj', () => {
    it('It should GET a store by CNPJ', (done) => {
      const cnpjTest = 12345678910113;
      chai
        .request(server)
        .get('/store/' + cnpjTest)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          expect(res.text).to.include('id');
          expect(res.text).to.include('cnpj');
          expect(res.text).to.include('address');
          expect(res.text).to.include('email');
          expect(res.text).to.include('telephoneNumber');
          expect(res.text).to.include('headcount');
          done();
        });
    });
    it('It should NOT GET a store by CNPJ', (done) => {
      const cnpjInvalid = 11111111111111;
      chai
        .request(server)
        .get('/store/' + cnpjInvalid)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body)
            .to.have.a.property('message')
            .to.include('There is no store with this cnpj');
          done();
        });
    });
  });

  //test PUT route
  describe('PUT /store/:cnpj', () => {
    it('It should PUT an existing store', (done) => {
      const cnpjTest = 12345678910113;
      const storeUpdated = {
        address: 'Address changed',
      };
      chai
        .request(server)
        .put('/store/' + cnpjTest)
        .send(storeUpdated)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          expect(res.body)
            .to.have.a.property('message')
            .to.include('Store successfully updated');

          done();
        });
    });

    it('It should NOT PUT an existing store if you put the invalid fields', (done) => {
      const cnpjTest = 12345678910113;
      const storeUpdated = {
        cnpj: 'Ta',
      };
      chai
        .request(server)
        .put('/store/' + cnpjTest)
        .send(storeUpdated)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body)
            .to.have.a.property('message')
            .to.include('CNPJ invalid, try again');
          done();
        });
    });
  });

  //test DELETE route
  describe('DELETE /store/:cnpj', () => {
    it('It should DELETE an existing task', (done) => {
      const cnpjTest = 12345678910113;
      chai
        .request(server)
        .delete('/store/' + cnpjTest)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          expect(res.body)
            .to.have.a.property('message')
            .to.include('Store successfully deleted');
          done();
        });
    });

    it('It should NOT DELETE a store that is not in the database', (done) => {
      const cnpjTest = 145;
      chai
        .request(server)
        .delete('/store/' + cnpjTest)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body)
            .to.have.a.property('message')
            .to.include('There is no store with this cnpj');

          done();
        });
    });
  });
});
