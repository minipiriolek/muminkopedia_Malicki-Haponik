import { characterRepository, CharacterRepository } from "../repositories/CharacterRepository";
import { ICharacter } from "../models/Character";

export class CharacterService {
    private repository: CharacterRepository;

    constructor() {
        this.repository = characterRepository;
    }

    async getAllCharacters(): Promise<ICharacter[]> {
        return await this.repository.findAll();
    }

    async getCharacterById(id: string | string[]): Promise<ICharacter> {
        const character = await this.repository.findById(id as string);
        if (!character) {
            throw new Error("Mieszkaniec nie figuruje w archiwum Paszczaka.");
        }
        return character;
    }

    async createCharacter(data: Partial<ICharacter>): Promise<ICharacter> {
        if (!data.name || data.name.trim().length === 0) {
            throw new Error("Imię mieszkańca jest wymagane do rejestracji.");
        }

        const existingCharacter = await this.repository.findByName(data.name);
        if (existingCharacter) {
            throw new Error("Ten mieszkaniec jest już zapisany w Muminkopedii.");
        }

        return await this.repository.create(data);
    }

    async updateCharacter(id: string | string[], updateData: Partial<ICharacter>): Promise<ICharacter> {
        const updatedCharacter = await this.repository.update(id as string, updateData);
        if (!updatedCharacter) {
            throw new Error("Nie można zaktualizować – nie znaleziono postaci o podanym ID.");
        }
        return updatedCharacter;
    }

    async deleteCharacter(id: string | string[]): Promise<void> {
        const deleted = await this.repository.delete(id as string);
        if (!deleted) {
            throw new Error("Nie można usunąć postaci, której nie ma w rejestrze.");
        }
    }
}

export const characterService = new CharacterService();