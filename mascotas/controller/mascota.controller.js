import mascotaServices from "../service/mascota.services.js";


class MascotaController{

    async createMascotas(request, response){
        try {
            const id = await mascotaServices.createMascota(request.body);
            return response.status(201).json(id)
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error')
        }
    }

    async getMascotasById(request, response){
        try{
            const id = request.params.id;
            const mascotas = await mascotaServices.getMascotaById(id);

            if(!mascotas){
                return response.status(404).send('mascota not found')
            }

            return response.status(201).json(mascotas)
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error')
        }
    }

    async updatemascota(request, response){
        try {
            const id = request.params.id;
            const update = request.body;
            const success = await mascotaServices.updateMascota(id, update)

            if(!success){
                return response.status(404).send('mascota not found')
            }

            return response.status(201).send('mascota actualizada')
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error')
        }
    }

    async deletemascota(request, response){
        try {
            const id = request.params.id;
            console.log('CHAPULINCOLORADO se ejecuta mascotasservice.deleteMascotas(id)');
            const success = await mascotaServices.deleteMascota(id)
            console.log('CHAPULINCOLORADO finalizo mascotasservice.deleteMascotas(id)');
            if(!success){
                return response.status(404).send('mascota not found')
            }

            return response.send('mascota eliminada')
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error')
        }
    }


}

export default new MascotaController();
