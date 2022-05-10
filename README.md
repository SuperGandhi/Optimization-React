How can I optimize performance with ReactJs?

First we must understand what the DOM means, which is basically the graphical interface. Every time the state of our UI changes, the DOM has to be updated to represent this state change. The problem occurs when we want to make multiple updates to the DOM of our application, since updating the DOM is optimized but showing these changes to the user is an extremely cumbersome process, this will cause us to begin to notice a notable decline in the performance of our application. So, what can we do to make this task lighter for our processors and this is where the concept of virtual DOM plays an important role working in a more efficient way than the DOM, by having the virtual DOM working and the DOM not working. It would mean that we are doing double work, the answer is yes, however, this is much more efficient than going directly to update the DOM. So, when we have the virtual DOM , the main difference is that it only renders the changes we make to one of our nodes compared to the classic DOM, making it much more efficient. Now, if React is optimized by default, why would you have to add more optimization to our application? It happens that when we have an application that contains many nodes, although not all of them will be updated, there will be some that will have a render method extremely heavy much greater than the computing capacity of a machine and if we do not prevent the render method from being executed we will be triggering from the root node, the render method of absolutely all the nodes, this will be a problem when we Let's have a complex application where each render method will be executing complicated logic. With this small application we will be able to see some practical solutions to fulfill this purpose.

1.- Memorization: It reduces the computation time, as long as we have already executed said function once. Ejm:

const memo = (fn) => {
	const memory = {}

	return (a) => {
		if (memory[a]) {
			console.log('pulling out of memory')
			return memory[a]
		}

		console.log('computing')
		memory[a] = fn(a)
		return memory[a]
	}
}

const fn = memo((iterator) => {
	let total = 1
	for (let i = 0; i < iterator; i++) {
		total = total * iterator
	}

	return total
})

console.time('without memo')
fn(5000000)
fn(5010000)
fn(5020000)
fn(5030000)
fn(5040000)
console.timeEnd('without memo')

console.time('with memo')
fn(5000000)
fn(5010000)
fn(5020000)
fn(5030000)
fn(5040000)
console.timeEnd('with memo')

