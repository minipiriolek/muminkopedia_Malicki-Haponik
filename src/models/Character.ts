import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICharacter extends Document {
    name: string;
    description: string;
    species: 'Muminek' | 'Paszczak' | 'Miukk' | 'Ryjek' | 'Inny';
    isHibernating: boolean;
    bestFriend?: Types.ObjectId;
}

const CharacterSchema = new Schema<ICharacter>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true,
        enum: ['Muminek', 'Paszczak', 'Miukk', 'Ryjek', 'Inny'],
        default: 'Inny'
    },
    isHibernating: {
        type: Boolean,
        default: false
    },
    bestFriend: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: false
    },
}, {
    timestamps: true
});

export default mongoose.model<ICharacter>("Character", CharacterSchema);