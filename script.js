const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')

const showBill = () => {
	if(price.value === '' || people.value === 0 || tip.value === 0){
		error.textContent = 'Complete all fields'
		costInfo.style.display = 'none'
	} else{
		error.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)
	const sum = (newPrice + (newPrice * newTip)) / newPeople

	costInfo.style.display = 'block'
	cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', showBill)

