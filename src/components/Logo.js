import React from "react";
import ReelDealLogo from "../../public/ReelDeal.png";
import Image from "next/image";

function Logo() {
    return (
        <div style={{height: "20%", margin: '.5em', alignContent:"center", justifyContent:"center"}}>
            <Image
                src={ReelDealLogo}
                alt="Reel Deal Logo"
                layout="responsive"
                width={500}
                height={500}

            />
        </div>
    );
}

export default Logo;
