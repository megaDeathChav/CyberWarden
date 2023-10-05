import { headers } from 'next/headers';
import { blacklist } from '../vars';

// Middleware to validate an IP address
const validateIPAddress = (ipAddress: string) => {
  // Regular expression for a simple IP address format validation
  const ipPattern =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;

  return ipPattern.test(ipAddress);
};

export async function POST(req: Request) {
  const { ipAddress } = await req.json();

  if (validateIPAddress(ipAddress)) {
    blacklist.push(ipAddress);
    return Response.json(
      { blacklist_list: blacklist },
      { status: 200, statusText: 'OK' }
    );
  } else {
    return Response.json(
      { error: 'Invalid IP address format' },
      { status: 400, statusText: 'Bad Request' }
    );
  }
}
