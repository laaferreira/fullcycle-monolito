import { Column, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'client_order',
    timestamps: false,
})
export default class ClientOrder extends Model{

    @PrimaryKey
    @Column({allowNull: false, type: DataType.STRING})
    declare id: string;
    
    @Column({allowNull: false, type: DataType.STRING})
    declare name: string;
    
    @Column({allowNull: false, type: DataType.STRING})
    declare email: string;
    
    @Column({allowNull: false, type: DataType.STRING})
    declare document: string;
}