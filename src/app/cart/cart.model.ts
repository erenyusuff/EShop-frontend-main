export interface Cart {
  id: number;
  totalPrice: number;
  userId: number;
  deletedAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  cartProducts: CartProducts[];
}


export interface CartProducts {
  img: string,
  productName: string,
  quantity: number,
  price: number,
}
