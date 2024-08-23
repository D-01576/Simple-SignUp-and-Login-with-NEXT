import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { error } from "console";

const secret = "12345678"

const prisma = new PrismaClient();

const createUserSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  password: z.string().min(6),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = createUserSchema.safeParse(body);

    if(!result.success){
        return NextResponse.json({success: "false"})
    }

    const user = await prisma.user.create({
      data: {
        name: result.data.name,
        username: result.data.username,
        password: result.data.password,
      },
    });

    const token = jwt.sign({ userId: user.id }, secret, {
      expiresIn: "1h",
    });

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
