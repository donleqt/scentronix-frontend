import { NextResponse } from 'next/server';

import { db } from '@/backend/mocks/db';

export async function GET() {
  return NextResponse.json(db.data.recipes);
}
