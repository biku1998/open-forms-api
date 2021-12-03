import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

export const hashPassword = async (plainPassword: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hashedPassword;
};

export const matchPassword = async (
  hashedPassword: string,
  plainPassword: string,
): Promise<boolean> => {
  const matched = await bcrypt.compare(plainPassword, hashedPassword);
  return matched;
};
