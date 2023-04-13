import React from "react";
import ReelDealLogo from "../../public/ReelDeal.png";

import Image from "next/image";

function Logo() {
    return (
        <div style={{ maxWidth: "100%", height: "auto", margin: '5em' }}>
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

