module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('shirts', 'team', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropColumn('shirts', 'team');
  },
};
