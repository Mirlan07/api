const data = fetch('https://test-docs.stores.kg/api/categories',  mode: 'no-cors',{
	method: 'GET',
	headers: {
		'Accept': 'application/json'
	}})
.then(response => response.json())
.then(data => {
	const root = document.querySelector('#app')
	data.map(item => {
		const li = document.createElement('li')
		li.innerHTML = `<li class="category">${item.name}</li>`
		item.categories.map(subItem => {
			const li2 = document.createElement('li')
			li2.innerHTML = `<li class="subcategory">${subItem.name}</;>`
			subItem.categories.map(subItem2 => {
				const li3 = document.createElement('li')
				li3.innerHTML = `<li class="subcategory2">${subItem2.name}</li>`
				li2.appendChild(li3)
			})
			li.appendChild(li2)
		})
    	root.appendChild(li)
	})
})
  
