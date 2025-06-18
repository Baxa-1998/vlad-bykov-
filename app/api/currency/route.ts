import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const base = searchParams.get('base') || 'RUB';

  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
  const data = await response.json();

  return NextResponse.json(data);
}