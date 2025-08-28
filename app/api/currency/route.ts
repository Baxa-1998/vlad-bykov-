import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // всегда используем USD как базовую валюту
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
  const data = await response.json();

  return NextResponse.json(data);
}