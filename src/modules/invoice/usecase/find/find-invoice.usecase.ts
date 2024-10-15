import UseCaseInterface from "../../../@shared/usecase/use-case.interface"
import InvoiceGateway from "../../gateway/invoice.gateway"
import { FindInvoiceUseCaseInputDTO, FindInvoiceUseCaseOutputDTO } from "./find-invoice.usecase.dto"

export default class FindInvoiceUseCase implements UseCaseInterface {
  constructor (private readonly repository: InvoiceGateway){}
  async execute(input: FindInvoiceUseCaseInputDTO): Promise<FindInvoiceUseCaseOutputDTO> {
    const invoice = await this.repository.find(input.id)

    return {
      id: invoice.id.id,
      name: invoice.name,
      document: invoice.document,
      address: {
        street: invoice.address.street,
        number: invoice.address.number,
        complement: invoice.address.complement,
        city: invoice.address.city,
        state: invoice.address.state,
        zipCode: invoice.address.zipCode,
    },
      createdAt: invoice.createdAt,
      total: invoice.total,
      items: invoice.items.map(item => ({ id: item.id.id, name: item.name, price: item.price }))
    }
  }
}