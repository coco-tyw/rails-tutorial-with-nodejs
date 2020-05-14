import { Sequelize, DataTypes} from 'sequelize'

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

  sequelize.define('user', {

    // attributes
    firstName: {
      type: dataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: dataTypes.STRING,
      allowNull: false
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }, {
    // options
  });

};
