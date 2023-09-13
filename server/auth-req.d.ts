
import { Request } from "express";

declare global {
    namespace Express {
      interface Request {
        user?: {
          userId?: string; // Replace 'string' with the actual type of your userId
          email?: string;
        };
        
      }
    }
  }