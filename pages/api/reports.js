import db from '../../utils/db';

export default async (req, res) => {
  try {
    const reports = await db.collection('reports').orderBy('created').get();
    const reportsData = reports.docs.map(report => ({
      id: report.id,
      ...report.data()
    }));
    res.status(200).json({ reporsData });
  } catch (e) {
    res.status(400).end();
  }
}
