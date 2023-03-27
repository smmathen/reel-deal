import React from "react";
import MovieTicket from "../../public/ticket.png";
import Image from "next/image";

function Ticket() {
    return (
        <div style={{ maxWidth: "50%", height: "auto"}}>
            <Image
                src={MovieTicket}
                alt = "Ticket Image"
                width = {450}
                height = {250}
            />
        </div>
    );
}

export default Ticket;