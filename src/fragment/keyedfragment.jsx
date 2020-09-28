import React from 'react'

function Product(props)
{
    return(
        <dl>
            {
                props.item.map(item=>{
                    return(
                        <React.Fragment key={item.id}>
                            <dt>{item.term}</dt>
                            <dd>{item.description}</dd>
                            <dd>{item.price}</dd>
                        </React.Fragment>
                    )
                })
            }
        </dl>
    )
}

export default Product;