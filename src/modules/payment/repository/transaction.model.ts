import { Column, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";

@Table({
  tableName: "transactions",
  timestamps: false,
})
export default class TransactionModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, type: DataType.STRING})
  declare id: string;

  @Column({ allowNull: false, field: "order_id", type: DataType.STRING})
  orderId: string;

  @Column({ allowNull: false, type: DataType.NUMBER})
  amount: number;

  @Column({ allowNull: false, type: DataType.STRING})
  status: string;

  @Column({ allowNull: false, field: "created_at", type: DataType.DATE})
  declare createdAt: Date;

  @Column({ allowNull: false, field: "updated_at", type: DataType.DATE})
  declare updatedAt: Date;
}
