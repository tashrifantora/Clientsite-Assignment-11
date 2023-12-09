import { useLoaderData } from "react-router-dom";
import Wish from "../Wish/Wish";
import { useState } from "react";

const Wishlist = () => {
    const wishlist = useLoaderData([])
    const [wishList, setWishList] = useState(wishlist)
    console.log(wishlist)

    return (
        <div className="px-5 md:px-10">
            <div>
                {
                    wishlist.map(wish => <Wish
                        key={wish._id}
                        wish={wish}
                        wishList={wishList}
                        setWishList={setWishList}
                    ></Wish>)
                }
            </div>
        </div>
    );
};

export default Wishlist;