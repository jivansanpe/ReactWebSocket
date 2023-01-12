import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {
    const params = useParams();
    const ws = useRef();

    useEffect(() => {
        ws.current = new WebSocket(process.env.REACT_APP_URL);

        ws.current.onopen = () => {
            console.log("Successfully connected!!!");
        }

        ws.current.onmessage = (message) => {
            console.log(message);
        }

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        ws.current.send(JSON.stringify({ message: message }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message</label>
            <input type="text" placeholder="Enter meesage" id="message" name="message" />
            <button type="submit">Send anything!!!</button>
        </form>
    );
}

export default ChatPage;