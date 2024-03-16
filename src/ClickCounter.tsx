import { useState } from "react"

export default function ClickCounter() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<button
				style={{ padding: 20 }}
				onClick={() => setCount((pre) => pre + 1)}>
				Count {count}
			</button>
		</div>
	)
}
