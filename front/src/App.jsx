import { useState } from "react";
import "./App.css";

import AuthPage from "./AuthPage";
import ChatPage from "./ChatPage";

function App() {
	const [user, setUser] = useState(undefined);

	if (!user) {
		return <AuthPage onAuth={(user) => setUser(user)} />;
	}
	return <ChatPage user={user} />;
}

export default App;
