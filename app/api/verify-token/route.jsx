import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
const JWT_SECRET = '12345678'; // Your JWT secret

export async function GET(req) {
    console.log("klsd")
  const cookies = req.headers.get('cookie');
  const token = cookies?.split('; ').find(row => row.startsWith('authToken=')).split('=')[1];
  console.log(token)

  if (!token) {
    return NextResponse.json({ isValid: false, message: 'No token provided' }, { status: 401 });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded.username)

    // Find the user by username
    const user = await prisma.user.findUnique({
      where: { username: decoded.username },
    });

    if (user) {
      return NextResponse.json({ isValid: true, user: user });
    } else {
      return NextResponse.json({ isValid: false, message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.json({ isValid: false, message: 'Invalid token' }, { status: 401 });
  }
}
