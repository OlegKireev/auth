import { MainNavigation } from '@/features/app-navigation';
import { Layout } from '@/shared';

export const AboutPage = function AboutPage() {
  return (
    <Layout navigation={<MainNavigation />}>
      <div>
        <h1>About</h1>
      </div>
    </Layout>
  );
};
