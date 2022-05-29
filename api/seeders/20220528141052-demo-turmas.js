'use strict'

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: '2020-02-01',
        nivel_id: 1,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()				 
      },
      {
        data_inicio: '2020-02-01',
        nivel_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()			
      },
      {
        data_inicio: '2020-02-01',
        nivel_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()			
      },
      {
        data_inicio: '2020-07-01',
        nivel_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()			
      }
    ], {})
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Turmas', null, {})
  }
}
