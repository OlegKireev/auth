import { MainNavigation } from '@/features/app-navigation';
import { Layout, Page } from '@/shared';
import { useAuthContext } from '@/features';

export const HomePage = function HomePage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <Layout navigation={<MainNavigation />}>
        <div>
          <h1>Welcome!</h1>
        </div>
      </Layout>
    </Page>
  );
};
