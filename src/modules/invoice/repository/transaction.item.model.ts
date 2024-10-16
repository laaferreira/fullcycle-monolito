import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, DataType } from "sequelize-typescript";
import { Table } from "sequelize-typescript/dist/model/table/table";
import InvoiceModel from "./transaction.model";

@Table({
    tableName: "invoices_items",
    timestamps: false,
  })
  export default class InvoiceItemModel extends Model {
    @PrimaryKey
    @Column({ allowNull: false, type: DataType.STRING})
    declare id: string;
  
    @ForeignKey(() => InvoiceModel)
    @Column({ allowNull: false, type: DataType.STRING})
    invoice_id: string;
  
    @BelongsTo(() => InvoiceModel)
    invoice: InvoiceModel;
  
    @Column({ allowNull: false, type: DataType.STRING})
    name: string;
  
    @Column({ allowNull: false, type: DataType.NUMBER})
    price: number;
  }