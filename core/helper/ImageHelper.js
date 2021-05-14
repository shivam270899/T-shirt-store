import React from 'react';
import { API } from '../../backend';


const ImageHelper = ({product}) => {

const imageurl = product ? `${API}/product/photo/${product._id}`  
     : `https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80`;
    return(
        <div className="rounded border border-success p-2">
                <img
                  src={imageurl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
        </div>
    )
}

export default ImageHelper;