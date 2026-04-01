import { Request, Response } from "express";
import { characterService } from "../services/CharacterService";

export class CharacterController {
    async getAll(req: Request, res: Response) {
        try {
            const characters = await characterService.getAllCharacters();
            res.status(200).json(characters);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const character = await characterService.getCharacterById(req.params.id);
            res.status(200).json(character);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newCharacter = await characterService.createCharacter(req.body);
            res.status(201).json(newCharacter);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updated = await characterService.updateCharacter(req.params.id, req.body);
            res.status(200).json(updated);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await characterService.deleteCharacter(req.params.id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export const characterController = new CharacterController();