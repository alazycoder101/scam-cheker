import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const reports = await db.collection('reports').get();
    const entriesData = reports.docs.map(entry => entry.data());

    if (entriesData.some(entry => entry.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('reports').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}
