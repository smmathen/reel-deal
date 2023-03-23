import React from "react";
import ReelDealLogo from "../../public/ReelDeal.png";
import Image from "next/image";

function Logo() {
    return (

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Image src={ReelDealLogo} alt="Reel Deal Logo" height={170} />
        </div>
    );
}

export default Logo;