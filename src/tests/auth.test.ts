import request from 'supertest';
import app from '../index';
import prisma from '../config/database';

beforeAll(async () => {
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Authentication Endpoints', () => {
  const userCredentials = {
    email: 'ziko@email.com',
    password: '00000000',
  };

  describe('POST /api/auth/signup', () => {
    it('should sign up a new user and return 201 status', async () => {
      const res = await request(app).post('/api/auth/signup').send(userCredentials);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('message', 'user created')
      
    });

   
  });


});
