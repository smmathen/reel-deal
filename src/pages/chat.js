import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import ChatList from "../components/ChatList";

const Chat = ({ sender }) => {
  const [chats, setChats] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    console.log(chats)
    const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");

    channel.bind("chat-event", function (data) {
      setChats((prevState) => [
        ...prevState,
        { sender: data.sender, message: data.message },
      ]);
    //   console.log("data:", data.message);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("message received");
    await axios.post("/api/pusher", { message: messageToSend, sender });
    console.log("message posted");
  };

  return (
    <>
           <p>Hello, {sender}</p>
            <div>
              {chats.map((chat, id) => (
                  <>
                    <p>{chat.message}</p>
                    <small>{chat.sender}</small>
                  </>
              ))}
            </div>

            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input
                type="text"
                value={messageToSend}
                onChange={(e) => setMessageToSend(e.target.value)}
                placeholder="start typing...."
            />
            <button
                type="submit"
            >
                Send
            </button>
            </form>

            <div>
            {chats.map((chat, id) => (
                <div key={id}>
                <p>{chat.message}</p>
                <small>{chat.sender}</small>
                </div>
            ))}
            </div>
            <p>hello</p>
    </>
  );
};

export default Chat;