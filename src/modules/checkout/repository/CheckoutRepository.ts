import { Id } from "../../@shared"
import { ClientCheckoutEntity, OrderCheckout, ProductStoreCheckoutEntity } from "../domain"
import { CheckoutGatewayInterface } from "../gateway"
import { ClientModel } from "./ClientModel"
import { OrderModel } from "./OrderModel"
import { ProductModel } from "./ProductModel"

export class CheckoutRepository implements CheckoutGatewayInterface {

  async addOrder(order: OrderCheckout): Promise<void> {

    const input = {
      id: order.id.id,
      client: {
        id: order.client.id.id,
        name: order.client.name,
        document: order.client.document,
        email: order.client.email
     },
      items: order.products.map(item => ({
        id: item.id.id,
        orderId: order.id.id,
        name: item.name,
        description: item.description,
        salesPrice: item.salesPrice
      })),
      status: order.status,
    };

try{
    await OrderModel.create(
      input,
      {
        include: [
          {
            model: ProductModel
          },
          {
            model: ClientModel
          },
        ]
      }
    )

  } catch (error) {
    console.log(error);
    throw error
  }
  }

  async findOrder(id: string): Promise<OrderCheckout | null> {
    const order = await OrderModel.findOne({
      where: { id },
      include: ['items', 'client']
    })

    if (!order) {
      throw new Error('Order not found.')
    }

    return new OrderCheckout({
      id: new Id(order.id),
      client: new ClientCheckoutEntity({
        id: new Id(order.client.id),
        name: order.client.name,
        email: order.client.email,
        document: order.client.document,
        address: order.client.address
      }),
      products: order.items.map(item => {
        return new ProductStoreCheckoutEntity({
          id: new Id(item.id),
          orderId: new Id(item.orderId),
          name: item.name,
          description: item.description,
          salesPrice: item.salesPrice
        });
      }),
    });
  }
}
