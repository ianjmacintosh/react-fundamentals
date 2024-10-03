import { createRoot } from 'react-dom/client'

export function Box({
	// 🐨 add a size prop here
	size,
	...otherProps
}: React.ComponentProps<'div'> & { size?: 'small' | 'medium' | 'large' }) {
	// 🐨 based on the size prop, define a new variable called sizeClassName
	const sizeClassName = size ? `box--${size}` : ''
	return (
		<div
			// 🐨 add the sizeClassName to the className prop
			// 💯 for something extra, handle the case where no className is given (remove extra spaces).
			{...otherProps}
			className={`box ${sizeClassName} ${otherProps?.className ? otherProps.className : ''}`.trim()}
			style={{ fontStyle: 'italic', ...otherProps?.style }}
		/>
	)
}

function App() {
	return (
		<div>
			<Box size="small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box size="large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
