import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {

	return (
        <div style={{ height: '100vh'}}>
        
        
        <PrettyChatWindow
            projectId="a1d9752e-fd93-4483-a91e-e4ea4d95fae7"
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
        
        </div>
		
	);
};
export default ChatPage;
