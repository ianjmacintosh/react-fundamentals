import { Children } from 'react'
import { createRoot } from 'react-dom/client'

const Box = ({style, className, children, ...props}: React.ComponentProps<'div'>) => {
	const styleObject = {
		fontStyle: 'italic',
		...style
	}
	const classNameString = `box ${className}`
	return <div style={styleObject} className={classNameString} {...props}>{children}</div>
}
const smallBox = (
	<Box
		className="box--small"
		style={{ backgroundColor: 'lightblue' }}
		title="The Great Light Blue Box!!"
	>
		small lightblue box
	</Box>
)
const mediumBox = (
	<Box
		className="box--medium"
		style={{ backgroundColor: 'pink' }}
	>
		medium pink box
	</Box>
)
const largeBox = (
	<Box
		className="box--large"
		style={{ backgroundColor: 'orange' }}
	>
		large orange box
	</Box>
)
const sizelessColorlessBox = (
	<Box>
		sizeless colorless box
	</Box>
)

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)

export {Box, App}
