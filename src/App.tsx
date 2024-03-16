import "./style.css"
import IMAGE from "./avatar.png"
import LOGO from "./react.svg"

export default function App() {
	return (
		<>
			<h1>Hello World</h1>
			<img src={IMAGE} alt="avatar" width="300" height="300" />
			<img src={LOGO} alt="logo" width="100" height="100" />
		</>
	)
}
