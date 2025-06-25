import clientPromise from '@/app/lib/mongodb';
import { getFilteredCollections } from '@/app/lib/utils/admin-routes';

export async function GET(req: Request) {
  try {
    return getFilteredCollections('cloth', clientPromise, req);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export const dynamic = 'force-dynamic';
