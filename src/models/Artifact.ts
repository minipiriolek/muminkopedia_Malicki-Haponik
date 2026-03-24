import mongoose, { Schema, Document, Types } from "mongoose";

export interface IArtifact extends Document {
    name: string;
    properties: string;
    owner: Types.ObjectId;
}

const ArtifactSchema = new Schema<IArtifact>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    properties: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model<IArtifact>("Artifact", ArtifactSchema);