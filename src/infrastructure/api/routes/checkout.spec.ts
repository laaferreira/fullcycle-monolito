import express, { Express } from 'express';
import { checkoutRouter } from './checkout';
import { Sequelize } from 'sequelize-typescript';
import { Umzug } from 'umzug';
import {ProductStoreCatalogModel} from "../../../modules/storeCatalog/repository/ProductStoreCatalogModel";
import {InvoiceModel} from "../../../modules/invoice/repository/InvoiceModel";
import {InvoiceItemModel} from "../../../modules/invoice/repository/InvoiceItemModel";
import { ClientAdminModel } from "../../../modules/clientAdmin/repository/ClientAdminModel";
import { ProductAdminModel } from "../../../modules/productAdmin/repository/ProductAdminModel";
import { ClientModel } from '../../../modules/checkout/repository/ClientModel';
import { OrderModel } from '../../../modules/checkout/repository/OrderModel';
import { ProductModel } from '../../../modules/checkout/repository/ProductModel';
import { TransactionModel } from '../../../modules/payment';
import { migrator } from '../../../test-migrations/config-migrations/migrator';
import request from 'supertest';
import { clientRouter } from './clients';
import { productRouter } from './product';

describe('Integration test checkout api', () => {
  const app: Express = express();
  app.use(express.json());
  app.use('/client', clientRouter);
  app.use('/product', productRouter);
  app.use('/checkout', checkoutRouter);

  let sequelize: Sequelize;
  let migration: Umzug<any>;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
    });
    sequelize.addModels([
      ClientModel,
      OrderModel,
      ProductModel,
      ProductAdminModel,
      ProductStoreCatalogModel,
      TransactionModel,
      ClientAdminModel,
      InvoiceModel,
      InvoiceItemModel,
    ]);
    migration = migrator(sequelize);
    await migration.up();
  });
  afterEach(async () => {
    if (!migration || !sequelize) {
      return;
    }
    migration = migrator(sequelize);
    await migration.down();
    await sequelize.close();
  });
  it('should create a Checkout', async () => {
    const client = await request(app).post('/client').send({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@test.com',
      document: '123456789',
      street: 'Street',
      number: '123',
      complement: 'Complement',
      city: 'City',
      state: 'State',
      zipCode: '12345678',
    });

    const product = await request(app).post('/product').send({
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      purchasePrice: 100,
      stock: 10,
    });

    const output = await request(app).post('/checkout').send({
      id: '1',
      clientId: client.body.id,
      products: [{ productId: product.body.id }],
    });

     expect(output.status).toEqual(200);
  });
});
