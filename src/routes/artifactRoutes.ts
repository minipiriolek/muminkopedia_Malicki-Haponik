import express from "express";
import {deleteArtifact, getArtifacts, postArtifacts, putArtifact} from "../controllers/artifact.contoller";

const router = express.Router();

router.get('/', getArtifacts);

router.post('/', postArtifacts)

router.put('/:id', putArtifact);

router.delete('/:id', deleteArtifact);

export default router;