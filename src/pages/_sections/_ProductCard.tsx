import { addToCart } from 'src/cartStore';
import { ShoppingCart } from 'src/components/icons';
import type { CartItem } from 'src/data';

const ProductCard = (props: { item: CartItem; vorschaubild: string; children: any }) => {
  const { item, vorschaubild, children } = props;
  return (
    <div className="rounded-t-md border-b-4 border-pgl-blue bg-white shadow-lg">
      <div className="flex items-center bg-pgl-blue p-4 text-white">
        <span className="grow text-sm font-bold">{item.article}</span>
        {item.price && (
          <button
            id={item.article}
            value={JSON.stringify(item)}
            className="flex duration-300 md:hover:mr-2 md:hover:scale-110"
            onClick={() => addToCart(item)}
          >
            <ShoppingCart />
            <span className="ml-2 whitespace-nowrap text-sm font-semibold">In den Warenkorb</span>
          </button>
        )}
      </div>
      <img src={vorschaubild} alt={item.article} className="m-0" />
      <div className="relative p-4">
        {children}
        {item.price && <span className="absolute top-4 right-4 font-bold">CHF {item.price.toFixed(2)}</span>}
      </div>
    </div>
  );
};

export default ProductCard;
