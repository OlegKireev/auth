import { MainNavigation } from '@/features/app-navigation';
import { useAuthContext } from '@/entities/user';
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
