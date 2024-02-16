const asyncHandler = require ('express-async-handler')


const getProductos = asyncHandler( async (req,res) => {
    res.status(200).json ({ mensaje: 'Get Productos'})
})


const createProductos = asyncHandler( async (req,res) => {

    if (!req.body.Producto){
        res.status(400)
        throw new Error("Porfavor Teclea un Producto" )
    }
    
    res.status(200).json ({ mensaje: 'Create Producto'})
})

const updateProductos = asyncHandler( async (req,res) => {
    res.status(200).json ({ mensaje: `Modificar producto con id ${req.params.id} `})
})

const deleteProductos = asyncHandler( async (req,res) => {
    res.status(200).json ({ id: req.params.id })
})

module.exports = {
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos
}