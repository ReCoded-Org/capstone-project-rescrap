import React from 'react';
import AddProductForm from './AddProductForm';


const AddProduct = (props)=>{

    return(
        <section>
            <AddProductForm
                 userData={props.userData}
            loggedIn={props.loggedIn}
            firstLogin={props.firstLogin}
            uid={props.uid}
            />
        </section>

    )
}

export default AddProduct;