export default async function handler(req, res) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  try {
    await res.unstable_revalidate('/blog/schedule')
    await res.unstable_revalidate('/blog/music')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
