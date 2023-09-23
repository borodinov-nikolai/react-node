const {Device} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const {Op} = require('sequelize')


class DeviceController{

    async create(req, res) {
        const {name, price, brandId, typeId} = req.body;
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const device = await Device.create({name, price, brandId, typeId, img: fileName});
        return res.json("Девайс успешно создан!")
    }


    async getAll(req, res) {
        let {typeId, brandId, search} = req.query
        let devices
        
        if (!typeId && !brandId){
            devices = await Device.findAll();
        }
        if(!typeId && !brandId && search){
         devices = await Device.findAll({where: { name: {[Op.iLike]: '%' + search + '%'}}})
        }
        if (!typeId && brandId){
            devices = await Device.findAll({where: {brandId}});
        }
        if (typeId && !brandId){
            devices = await Device.findAll({where: {typeId}});
        }
        if (typeId && brandId){
            devices = await Device.findAll({where: {typeId, brandId}});
        }
        
        return res.json(devices);
    }

  

    
}


module.exports = new DeviceController()