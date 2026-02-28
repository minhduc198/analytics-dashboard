export type OrderStatus = 'Pending' | 'Delivered' | 'Canceled'

export interface RecentOrderECommerce {
  id: number
  productImg: string
  productName: string
  variants: number
  category: string
  prices: number
  status: OrderStatus
}
