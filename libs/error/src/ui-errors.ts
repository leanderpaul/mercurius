/**
 * Importing NPM Packages
 */

/**
 * Importing user-defined modules
 */

/**
 * Types
 */

/**
 * Constants
 */

export class UIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UIError';
  }
}
