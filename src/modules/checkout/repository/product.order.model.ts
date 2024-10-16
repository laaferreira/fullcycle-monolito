import { Column, ForeignKey, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";
import InvoiceModel from "../../invoice/repository/transaction.model";
import OrderModel from "./order.model";

@Table({
    tableName: 'products_order',
    timestamps: false
})
export default class ProductOrder extends Model{

    @PrimaryKey
    @Column({allowNull: false, type: DataType.STRING})
    declare id: string;

    @Column({allowNull: false, type: DataType.STRING})
    declare name: string;

    @Column({allowNull: true, type: DataType.STRING})
    declare description: string;

    @Column({allowNull: true, type: DataType.NUMBER})
    declare purchasePrice: number;

    @Column({allowNull: true, type: DataType.NUMBER})
    declare salesPrice: number;

    @Column({allowNull: true, type: DataType.NUMBER})
    declare stock: number;

    @Column({allowNull: true, type: DataType.DATE})
    declare createAt: Date;

    @Column({allowNull: true, type: DataType.DATE})
    declare updateAt: Date;

    @ForeignKey(() => InvoiceModel)
    declare invoice_id: string;

    @ForeignKey(() => OrderModel)
    declare order_id: string;

}