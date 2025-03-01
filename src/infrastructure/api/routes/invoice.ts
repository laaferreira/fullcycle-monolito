import express, { Request, Response } from "express";
import {InvoiceRepository} from "../../../modules/invoice/repository/InvoiceRepository";
import {FindInvoiceUseCase} from "../../../modules/invoice/useCase/findInvoice/FindInvoiceUseCase";
import {GenerateInvoiceUseCase} from "../../../modules/invoice/useCase/generateInvoice/GenerateInvoiceUseCase";

export const invoiceRouter = express.Router();

invoiceRouter.get("/", async (req: Request, res: Response) => {

  const usecase = new GenerateInvoiceUseCase(new InvoiceRepository());
  try {
    const invoiceDto = {
      name: req.body.name,
      document: req.body.document,
      street: req.body.street,
      number: req.body.number,
      complement: req.body.complement,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      items: req.body.items.map( (item: any) => { return { id: item.id, name: item.name, price: item.price} })
  };
    const output = await usecase.execute(invoiceDto);
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
});

invoiceRouter.get("/:invoiceId", async (req: Request, res: Response) => {
  const usecase = new FindInvoiceUseCase(new InvoiceRepository());
  const output = await usecase.execute({id: req.params.invoiceId});

  res.format({
    json: async () => res.send(output)
  });
});