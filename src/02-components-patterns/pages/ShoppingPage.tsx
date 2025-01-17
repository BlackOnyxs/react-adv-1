import { ProductCard, ProductImage, ProductTitle, ProductsButtons} from '../components';

import  '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard  
                    product={ product }
                    className="bg-dark text-white">
                    <ProductCard.Image className ="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    className="bg-dark text-white"
                    product={ product }>
                    <ProductImage className ="custom-image" />
                    <ProductTitle className="text-bold"/>
                    <ProductsButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard 
                    product={ product }
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                    <ProductTitle style={{ fontWeight: 'bold' }}/>
                    <ProductsButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}
