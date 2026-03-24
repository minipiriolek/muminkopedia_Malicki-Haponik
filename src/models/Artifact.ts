import mongoose, {Document, Types} from "mongoose";

export interface Artifact extends Document { //extends Document dla funkcji operacji na danych np. zapis do bazy za pomocą gotowej metody
    name: string;
    properties: string;
    owner: Types.ObjectId;
}

const ArtifactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    properties: {type: String, required: true},
    owner: {type: Types.ObjectId, required: true},
})

export default mongoose.model<Artifact>("Artifact", ArtifactSchema);