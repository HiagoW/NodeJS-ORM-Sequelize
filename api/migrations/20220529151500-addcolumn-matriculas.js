'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Matriculas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Matriculas', 'deletedAt')
  }
}