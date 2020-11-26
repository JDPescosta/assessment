const Assessment = ({}) => {
	/**
	 * #1. Compare two objects to determine if the first one contains property values in the second one; for example, `person3` below is contained in `person1` below and so should be `true`, while `person3` is not contained in `person2`
	 */

	const step1 = () => {
		const matches = ({ firstObj, secondObj }) => {
			// Fill in solution here
			const results = Object.keys(firstObj)
				.map(key => {
					if (key in secondObj) return firstObj[key] === secondObj[key]
				})
				.filter(x => x !== undefined)

			return results.length === 0 ? false : !results.includes(false)
		}

		/*
			Alternative solution: your solution above is technically correct, but cumbersome. There are ways to make the code more concise.
			See below for one such possibility.
		 */

		const alternative = ({ firstObj, secondObj }) =>
			Object.keys(firstObj).every(key1 =>
				Object.keys(secondObj).some(
					key2 => key1 === key2 && firstObj[key1] === secondObj[key2]
				)
			)

		const person1 = { age: 25, hair: 'long', beard: true }
		const person2 = { age: 26, hair: 'short', beard: true }
		const person3 = { hair: 'long', beard: true }
		const person4 = { name: 'terry' }

		console.log(matches({ firstObj: person1, secondObj: person2 }))
		console.log(matches({ firstObj: person2, secondObj: person3 }))
		console.log(matches({ firstObj: person3, secondObj: person1 }))
		console.log(matches({ firstObj: person3, secondObj: person4 }))
	}

	step1()

	/**
	 * #2. Filter out the specified values from a specified array. Return the original array without the filtered values.
	 */

	const step2 = () => {
		/* Excellent */

		const remove = ({ array, values }) => array.filter(e => !values.includes(e))

		const values = ['e', 'h', 'z']
		const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		const array2 = ['l', 'o', 'g', 'q', 'z', 'f', 'j', 'r']
		const array3 = ['w', 'e', 'o', 'r', 'e', 'e', 'e', 'k', 'i', 'n', 'g']

		console.log(remove({ array: array1, values }))
		console.log(remove({ array: array2, values }))
		console.log(remove({ array: array3, values }))
	}

	step2()

	/**
	 * #3. Write a function to generate a random hexadecimal color code.
	 */

	const step3 = () => {
		/* Excellent */

		const hex = () => {
			// Fill in solution here; feel free to look up hexadecimal codes on the internet, but don’t look up a code solution
			const hexCode = []

			for (let i = 0; i < 3; i++) {
				const hex = Math.floor(Math.random() * 255).toString(16)
				/* Surprised this worked since you defined `hexCode` as `const`... didn’t know you could `push` to a `const` */
				hexCode.push(hex.length < 2 ? `0${hex}` : hex)
			}

			return `#${hexCode.join('')}`
		}

		console.log(hex())
	}

	step3()

	/**
	 * #4. Write a function to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
	 */

	const step4 = () => {
		/* Great work */

		const luhn = input => {
			// Fill in solution here; feel free to look up Luhn Algorithm and how it works mathematically, but don’t look up a code solution
			const inputAsStr = typeof input === 'string' ? input : input.toString()
			const luhnValues = inputAsStr.replace(/\s/g, '').split('').map(Number)

			const checkNum = luhnValues.pop()

			const sumNum = (a, b) => a + b

			const sumOfArray = luhnValues
				.reverse()
				.map((val, idx) => {
					if (idx % 2 === 0) {
						let x = val * 2

						if (x > 9) {
							x = x.toString().split('').map(Number).reduce(sumNum)
						}
						return x
					} else return val
				})
				.reduce(sumNum)

			return (sumOfArray * 9) % 10 === checkNum
		}

		console.log(luhn('5221320000307276'))
		console.log(luhn(6011329933655299))
		console.log(luhn(123456789))
		console.log(luhn('4242 4242 4242 4242'))
		console.log(luhn('75'))
		console.log(luhn('85'))
		console.log(luhn('729'))
	}

	step4()

	return <h1>Open developer console to read logs.</h1>
}

export default Assessment
