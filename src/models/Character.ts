import mongoose, {Document, Types} from "mongoose";

export interface Character extends Document{
    name: string;
    description: string;
    species: string;
    isHibernating: boolean;
    bestFriend: Types.ObjectId;
}

const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    species: { type: String, required: true },
    isHibernating:{ type: Boolean, default: false }, // domyślnie muminki nie śpią
    bestFriend: { type: Types.ObjectId, required: false },
})

export default mongoose.model<Character>("Character", CharacterSchema);