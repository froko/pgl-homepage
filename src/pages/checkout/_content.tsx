import { Trash } from '@pgl/components/icons'
import type { CartItemWithQuantity } from '@pgl/data'
import { removeFromCart } from '@pgl/store'
import { Fragment } from 'preact/jsx-runtime'

import CheckoutForm from './_checkout-form'

const Content = (props: {
  items: CartItemWithQuantity[]
  totalCost: number
}) => {
  return (
    <Fragment>
      <p>Du hast folgende Artikel in deinem Warenkorb:</p>
      <br />
      <div className="grid grid-cols-6 gap-2">
        {props.items.map((item) => (
          <Fragment key={item.article}>
            <div className="col-span-3">
              {item.quantity}x {item.article}
            </div>
            <div className="text-right">CHF</div>
            <div className="text-right">{item.price?.toFixed(2)}</div>
            <div className="mt-1 text-center duration-200 md:hover:scale-x-125">
              <button onClick={() => removeFromCart(item)}>
                <Trash />
              </button>
            </div>
          </Fragment>
        ))}
        <div className="col-span-3 font-bold">Total</div>
        <div className="text-right font-bold">CHF</div>
        <div className="text-right font-bold">{props.totalCost.toFixed(2)}</div>
      </div>
      <CheckoutForm items={props.items} totalCost={props.totalCost} />
    </Fragment>
  )
}

export default Content
