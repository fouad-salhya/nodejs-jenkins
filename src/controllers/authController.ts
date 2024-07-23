import { Request, Response } from 'express';
import authService from '../services/authService';

export const signup = async (req: Request, res: Response) => {
    
  const { email, password } = req.body;
  try {
    const user = await authService.signup(email, password);
    if(user) {
      return res.status(201).json({message : 'user created'});
    }
  } catch (error) {
    res.status(400).json({error});
  }
};

export const signin = async (req: Request, res: Response) => {

  const { email, password } = req.body;
  try {
    const token = await authService.signin(email, password);
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000 // Cookie expire dans 1 heure
      });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ "error": error });
  }
};

export const signout = (req: Request, res: Response) => {
  res.clearCookie('jwt');
  res.status(200).json({ message: 'User signed out' });
};
