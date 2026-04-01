import {Request, Response} from "express";
import {addArtifact, fetchArtifacts, removeArtifact, updateArtifact} from "../services/artifact.service";



export async function getArtifacts(req: Request, res: Response){
    try{
        const artifacts = await fetchArtifacts();
        res.status(200).json(artifacts);
    }catch(err){
        res.status(500).json({error: err});
    }
}

export async function postArtifacts(req: Request, res: Response){
    try{
        const {name, properties, owner} = req.body;
        const newArtifact = await addArtifact(name, properties, owner);
        res.status(200).json({message: `Succesfully add artifact: ${newArtifact}`});
    }catch(err){
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        res.status(500).json({error: `Cannot add new artifact ${errorMessage}`});
    }
}


export async function putArtifact(req: Request, res: Response){
    try{
        const id = req.params.id as string;
        const updatedData = req.body;
        const updatedArtifact = await updateArtifact(id, updatedData);
        res.status(200).json(updatedArtifact);
    }catch(err){
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        if (errorMessage === "Artifact not found") {
            res.status(404).send({message: errorMessage});
        }else {
            res.status(500).json({error: `Cannot update artifact ${errorMessage}`});
        }
    }
}


export async function deleteArtifact(req: Request, res: Response){
    try{
        const id = req.params.id as string;
        const deletedArtifact = await removeArtifact(id);
        res.status(200).json({message: "Removed artifact", artifact: deletedArtifact});
    }catch(err){
        const error = err instanceof Error ? err : new Error("Unknown error");
        if (error.message === "Artifact not found"){
            res.status(400).json({error: error.message});
        }else{
            res.status(500).json({error: "Cannot remove artifact"});
        }
    }
}