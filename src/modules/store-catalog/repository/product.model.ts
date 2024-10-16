import { Column, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";

@Table({
  tableName: "products",
  timestamps: false,
})
export default class ProductStoreModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, type: DataType.STRING})
  declare id: string;

  @Column({ allowNull: false, type: DataType.STRING})
  name: string;

  @Column({ allowNull: false, type: DataType.STRING})
  description: string;

  @Column({ allowNull: true, type: DataType.NUMBER})
  purchasePrice: number;

  @Column({ allowNull: true, type: DataType.NUMBER})
  declare stock: number;

  @Column({ allowNull: true, type: DataType.NUMBER})
  declare salesPrice: number;

  @Column({allowNull: true, type: DataType.DATE})
  declare createdAt: Date;

  @Column({allowNull: true, type: DataType.DATE})
  declare updatedAt: Date;
}
