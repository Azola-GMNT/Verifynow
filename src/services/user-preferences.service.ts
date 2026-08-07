import { userPreferencesRepository } from "@/repositories/user-preferences.repository";

export class UserPreferencesService {
  async getPreferences(userId: string) {
    return await userPreferencesRepository.getByUserId(userId);
  }

  async savePreferences(userId: string, data: any) {
    return await userPreferencesRepository.update(userId, data);
  }
}

export const userPreferencesService =
  new UserPreferencesService();