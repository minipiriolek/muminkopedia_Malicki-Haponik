import { Router } from "express";
import { characterController } from "../controllers/CharacterController";
import {postArtifacts, putArtifact} from "../controllers/artifact.contoller";

const router = Router();

router.get("/with-artifacts", characterController.getCharactersWithArtifactsController);

router.get("/", characterController.getAll);
router.get("/:id", characterController.getById);
router.post("/", characterController.create);
router.put("/:id", characterController.update);
router.delete("/:id", characterController.delete);


export default router;