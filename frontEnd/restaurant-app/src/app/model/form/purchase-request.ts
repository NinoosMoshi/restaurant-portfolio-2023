import { Address } from "./address";
import { Customer } from "./customer";
import { Item } from "./item";
import { Request } from "./request";


export class PurchaseRequest {


  customer?: Customer;
  fromAddress?: Address;
  toAddress?: Address;
  requestOrder?: Request;
  items?: Item[];


}
