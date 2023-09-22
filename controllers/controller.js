const { Data_payment } = require ('../models/index')

class Controller {
    static async FindAll ( req , res){
        try {
            const data_payment = await Data_payment.FindAll()
            res.status(200).json(data_payment)
        } catch (error) {
            console.log(error);
        }
    }

    static async addData ( req , res){
        try {
            const { nama_barang, jumlah_barang, harga_barang } = req.body
            const data = await Data_payment.create({
                nama_barang, jumlah_barang, harga_barang
            })
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        }
    }
    static async updateData (req, res,next) {
        try{
            const { id } = req.params
            const { nama_barang, jumlah_barang, harga_barang } = req.body
            const data = await Data_payment.update({nama_barang, jumlah_barang, harga_barang}, {
                where : { id },
                returning : true
            })

            res.status(201).json({
                message : 'succes updated'
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteData ( req, res){
        try {
            const deleteData = await Data_payment.destroy({where: { id }})
            if (deleteData) {
                res.status(200).json({
                    msg : "Data success to deleted"
                })

            } else {
                res.status(404).json({
                    msg : 'Data not found'
                })
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Internal server error"
            })
        }
    }
}

module.exports = Controller