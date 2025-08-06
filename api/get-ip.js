export default function handler(req, res) {
  const xff = req.headers['x-forwarded-for'];
  const rawIp = xff ? xff.split(',')[0].trim() : req.socket?.remoteAddress || null;
  const ip = rawIp?.startsWith("::ffff:") ? rawIp.slice(7) : rawIp;

  res.status(200).json({ ip });
}
