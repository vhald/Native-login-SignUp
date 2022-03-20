/*
User UUID
Membership Type
Membership Active
Membership expiry
*/

const Membership = sequelize.define('Membership', {

    user_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },

    // mem: memberships
    mem_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },


    mem_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    },

    mem_expiry: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }

}, { timestamp: true });


module.exports = Membership;