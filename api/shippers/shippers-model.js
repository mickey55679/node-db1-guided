const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // const result = await db.raw('select * from shippers;')
  const result = await db('shippers')
  // .select('phone', 'shippername')
  return result
}

async function getById(shipperId) {
  // select * from shippers where shipperid = 1
  const result = await db('shippers').where('shipperid', shipperId).first()
  return result
}

async function create(shipper) {
  const [shipperid] = await db('shippers').insert(shipper)
  const result = await getById(shipperid)
  return result
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
