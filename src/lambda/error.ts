import { Context } from 'aws-lambda';

export async function handler(event: any, context: Context) {

  // this doesn't work
  const initial = null
  const value = initial ?? 123 // <-- this doesn't work

  return {
    statusCode: 200,
    body: JSON.stringify('Ok')
  };
}
