const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'customer.html'))
})

const readCustomers = () => {
  try {
    const data = fs.readFileSync('customers.json', 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    return []
  }
}

const writeCustomers = (customers) => {
  fs.writeFileSync('customers.json', JSON.stringify(customers, null, 2))
}

app.get('/customers', (req, res) => {
  const customers = readCustomers()
  res.json(customers)
})

app.get('/customers/:id', (req, res) => {
  const customers = readCustomers()
  const customer = customers.find(c => c.id === req.params.id)
  if (!customer) return res.status(404).json({ message: 'Customer not found' })
  res.json(customer)
})

app.post('/customers', (req, res) => {
  const customers = readCustomers()
  const newCustomer = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  }

  customers.push(newCustomer)
  writeCustomers(customers)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
