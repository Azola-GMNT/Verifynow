export interface IdentityConfiguration {

  enableIdValidation: boolean;

  enablePassportValidation: boolean;

  enableBiometricValidation: boolean;

  enableFaceMatch: boolean;

}

export const defaultIdentityConfiguration: IdentityConfiguration = {

  enableIdValidation: true,

  enablePassportValidation: true,

  enableBiometricValidation: false,

  enableFaceMatch: false,

};