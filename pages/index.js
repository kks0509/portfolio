import ContainerBlock from '../components/ContainerBlock';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';

export default function Home({ repositories }) {
  return (
    <ContainerBlock title="Portfolio" description="92212702 구경섭">
      <Hero />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  return {
    props: {},
  };
};
