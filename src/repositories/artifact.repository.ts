import ArtifactSchema, {IArtifact} from "../models/Artifact";
import {Types} from "mongoose";

export async function getAllArtifacts(): Promise<IArtifact[]> {
    return ArtifactSchema.find()
}

export async function createArtifact(name: string, properties: string, owner: Types.ObjectId): Promise<IArtifact> {
    const newArtifact = new ArtifactSchema({name, properties, owner});
    return newArtifact.save();
}

export async function updateArtifactById(id: string, updateData: Partial<IArtifact>): Promise<IArtifact | null> {
    return ArtifactSchema.findByIdAndUpdate(id, updateData, {returnDocument: "after"})
}

export async function deleteArtifactById(id: string): Promise<IArtifact | null>{
    return ArtifactSchema.findByIdAndDelete(id)
}