import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import { OrderModel } from "../../modules/checkout/repository/OrderModel";
import { ClientAdminModel } from "../../modules/clientAdmin/repository/ClientAdminModel";
import { ProductAdminModel } from "../../modules/productAdmin/repository/ProductAdminModel";
import { checkoutRouter } from "./routes/checkout";
import { clientRouter } from "./routes/clients";
import { invoiceRouter } from "./routes/invoice";
import { productRouter } from "./routes/product";
import {ProductStoreCatalogModel} from "../../modules/storeCatalog/repository/ProductStoreCatalogModel";
import {TransactionModel} from "../../modules/payment/repository/TransactionModel";
import {ClientModel} from "../../modules/checkout/repository/ClientModel";
import {InvoiceModel} from "../../modules/invoice/repository/InvoiceModel";
import {ProductModel} from "../../modules/checkout/repository/ProductModel";
import {InvoiceItemModel} from "../../modules/invoice/repository/InvoiceItemModel";

export const app: Express = express();
app.use(express.json());
app.use("/clients", clientRouter);
app.use('/products', productRouter);
app.use('/checkout', checkoutRouter)
app.use('/invoice', invoiceRouter)

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
  await sequelize.addModels([
    ProductAdminModel, 
    ClientAdminModel, 
    ProductStoreCatalogModel, 
    TransactionModel,
    OrderModel,
    ClientModel,
    ProductModel,
    InvoiceModel,
    InvoiceItemModel
    ]);
  await sequelize.sync();
}
setupDb();