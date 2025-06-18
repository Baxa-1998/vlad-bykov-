import clientPromise from '@/app/lib/mongodb';
import { getDataFromDBByCollection } from '@/app/lib/utils/api-routes';

export async function GET() {
  try {
    return getDataFromDBByCollection(clientPromise, 'cart');
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
