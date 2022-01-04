import { ProductCard, ProductImage, ProductTitle, ProductsButtons} from '../components';

import  '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {
    const { shoppingCart, onProductCantChange } = useShoppingCart();
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
              
              {
                  products.map( product => (
                    <ProductCard 
                        key={ product.id }
                        className="bg-dark text-white"
                        product={ product }
                        onChange={ onProductCantChange }
                        value={ shoppingCart[product.id]?.count || 0 }>
                        <ProductImage className ="custom-image" />
                        <ProductTitle className="text-bold"/>
                        <ProductsButtons className="custom-buttons"/>
                    </ProductCard>
                  ))
              }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ([key, product]) => (
                        <ProductCard
                            key={ key }
                            className="bg-dark text-white"
                            product={ product }
                            style={{ width: '100px' }}
                            onChange={ onProductCantChange }
                            value={ product.count }
                        >
                            <ProductImage className ="custom-image" />
                            <ProductsButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>

        </div>
    )
}
