const getProductos = (req,res) => {
    res.status(200).json ({ mensaje: 'Get Productos'})
} 


const createProductos = (req,res) => {
    res.status(200).json ({ mensaje: 'Create Productos'})
} 

const updateProductos = (req,res) => {
    res.status(200).json ({ mensaje: `Modificar producto con id ${req.params.id} `})
} 

const deleteProductos = (req,res) => {
    res.status(200).json ({ id: req.params.id })
} 

module.exports = {
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos
}