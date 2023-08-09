import { JobDetailsContent } from "@/components/page-view";
import Spinner from "@/components/ui-ux/Spinner";
import datasource from "@/data-layer";
import { JobData } from "@/data-layer/job-entities";
import { GetStaticPropsContext } from "next";

interface Props {
  job: JobData;
}

const JobDetailsPage = ({ job }: Props) => {
  if (!job) return <Spinner />;
  return (
    <div>
      <JobDetailsContent job={job} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const slugs = await datasource.getJobSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug as string;
  const job = await datasource.getJobBySlug(slug);

  if (!job) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      job,
    },
    revalidate: 5,
  };
};

export default JobDetailsPage;
