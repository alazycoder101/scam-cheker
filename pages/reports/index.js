import Link from 'next/link'
import db from '../../utils/db';

const Reports = (props) => {
  const { reportsData } = props;

  return (
    <div>
      <h3>Reports</h3>
      {reportsData.map(report => (
        <div key={report.id}>
          <Link href={`/reports/${report.slug}`}>
            <a>{report.title}</a>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const reports = await db.collection('reports').orderBy('created', 'desc').get();
  const reportsData = reports.docs.map(report => ({
    id: report.id,
    ...report.data()
  }));
  return {
    props: { reportsData },
    revalidate: 10
  }
}

export default Reports;
