import Character, { ICharacter } from "../models/Character";

export class CharacterRepository {

    async findAll(): Promise<ICharacter[]> {
        return await Character.find().populate("bestFriend");
    }

    async findById(id: string): Promise<ICharacter | null> {
        return await Character.findById(id).populate("bestFriend");
    }

    async findByName(name: string): Promise<ICharacter | null> {
        return await Character.findOne({ name });
    }

    async create(characterData: Partial<ICharacter>): Promise<ICharacter> {
        const character = new Character(characterData);
        return await character.save();
    }

    async update(id: string, updateData: Partial<ICharacter>): Promise<ICharacter | null> {
        return await Character.findByIdAndUpdate(id, updateData, { new: true }).populate("bestFriend");
    }

    async delete(id: string): Promise<ICharacter | null> {
        return await Character.findByIdAndDelete(id);
    }
}

export const characterRepository = new CharacterRepository();