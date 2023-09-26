import  express from "express";
import mascotaController from "../controller/mascota.controller.js";

const router = express.Router();

router.get('/mascotas/:id', mascotaController.getMascotasById)
router.post('/mascotas', mascotaController.createMascotas)
router.put('/mascotas/:id', mascotaController.updatemascota)
router.delete('/mascotas/:id', mascotaController.deletemascota)

export default router