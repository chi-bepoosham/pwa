import { z } from 'zod';

export const personalImageUploaderSchema = z.object({
  body_image: z.string(),
});

export type PersonalImageUploaderData = z.infer<typeof personalImageUploaderSchema>; 