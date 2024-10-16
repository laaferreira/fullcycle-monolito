import { Column, HasMany, Model, PrimaryKey, Table,DataType } from "sequelize-typescript";
import InvoiceItemModel  from "./transaction.item.model";

@Table({
    tableName: "invoices",
    timestamps: false,
  })
  export default class InvoiceModel extends Model {
    @PrimaryKey
    @Column({ allowNull: false, type: DataType.STRING})
    declare id: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    name: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    document: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    street: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    number: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    complement: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    city: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    state: string;
  
    @Column({ allowNull: false, type: DataType.STRING})
    zipCode: string;
  
    @HasMany(() => InvoiceItemModel)
    items: InvoiceItemModel[];
  
    @Column({ allowNull: false, type: DataType.NUMBER})
    total: number;
  
    @Column({ allowNull: false, type: DataType.DATE})
    declare createdAt: Date;
  }