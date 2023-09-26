import mascotaDao from "../dao/mascota.dao.js"


class MascotaService{
    async createMascota(mascotaDto){
        const {nombre, descripcion, cantidad, precio} = mascotaDto 
        return mascotaDao.createMascota(nombre, descripcion, cantidad, precio)
    }
    
    async getMascotaById(id){
        return mascotaDao.getMascotaById(id)
    }
    
    async updateMascota(id, updates){
        return mascotaDao.updateMascota(id, updates)
    }
    
    async deleteMascota(id){
        return mascotaDao.deleteMascota(id)
    }

}

export default new MascotaService();
