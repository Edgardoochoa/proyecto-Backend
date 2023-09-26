import db from "../database/db.js";

class MascotaDAO{
    async createMascota(nombre, descripcion, cantidad, precio){
        const [id] = await db('mascotas')
            .insert({
                nombre,
                descripcion,
                cantidad,
                precio
            })
            .returning('id');

        return id    
    }

    async getMascotaById(id){
        const mascota = await db('mascotas')
            .select('*')
            .where({id})
            .first();

        return mascota
    }


    async updateMascota(id, update){
        await db('mascotas')
            .where({id})
            .update(update);

        return true
    }


    async deleteMascota(id){
        await db('mascotas')
            .where({id})
            .del();

        return true
    }

}

export default new MascotaDAO()