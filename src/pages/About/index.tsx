import { useAuthContext } from '@/features';
import { MainNavigation } from '@/features/app-navigation';
import { Layout, Page } from '@/shared';

export const AboutPage = function AboutPage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <Layout navigation={<MainNavigation />}>
        <div>
          <h1>About</h1>
        </div>
      </Layout>
    </Page>
  );
};
