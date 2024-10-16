import { Column, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";
import AddressClientDto from "../domain/value-object/address-client.dto";

@Table({
  tableName: "clients",
  timestamps: false,
})
export default class ClientModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, type: DataType.STRING})
  declare id: string;

  @Column({ allowNull: false, type: DataType.STRING})
  name: string;

  @Column({ allowNull: false, type: DataType.STRING})
  email: string;

  @Column({allowNull: false, type: DataType.STRING})
  declare document: string;
  
  @Column({allowNull: false, type: DataType.STRING})
  declare street: string;

  @Column({allowNull: false, type: DataType.STRING})
  declare number: string;
  
  @Column({allowNull: false, type: DataType.STRING})
  declare city: string;

  @Column({allowNull: false, type: DataType.STRING})
  declare zipCode: string;

  @Column({allowNull: false, type: DataType.STRING})
  declare state: string;

  @Column({allowNull: false, type: DataType.STRING})
  declare complement: string

  @Column({ allowNull: false, type: DataType.DATE})
  declare createdAt: Date;

  @Column({ allowNull: false, type: DataType.DATE})
  declare updatedAt: Date;
}
