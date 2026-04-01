import {IArtifact} from "../models/Artifact";
import {createArtifact, getAllArtifacts} from "../repositories/artifact.repository";
import {Types} from "mongoose";


export async function fetchArtifacts(): Promise<IArtifact[]> {
    return await getAllArtifacts()
}

export async function addArtifact(name: string, properties: string, owner: Types.ObjectId): Promise<IArtifact>{
    if (!name || !properties || !owner) throw new Error("name, properties and owner required");
    return await createArtifact(name, properties, owner);
}

export async function updateArtifact(id: string, updatedData: Partial<IArtifact>): Promise<IArtifact> {
    const updatedArtifact = await updateArtifact(id, updatedData);
    if(!updatedArtifact) throw new Error("Artifact for update not found");
    return updatedArtifact;
}

export async function deleteArtifact(id: string): Promise<IArtifact> {
    const deletedArtifact = await deleteArtifact(id);
    if(!deletedArtifact) throw new Error("Artifact for delete not found");
    return deletedArtifact;
}