import { MainNavigation } from '@/features/app-navigation';
import { useAuthContext } from '@/entities/user';
import { Layout, Page } from '@/shared';

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
