import { MainNavigation } from '@/features/app-navigation';
import { useAuthContext } from '@/entities/user';
import { Layout, Page } from '@/shared';

export const ProfilePage = function ProfilePage() {
  const { isLoggedIn, isProfileLoaded } = useAuthContext();
  return (
    <Page
      isLoggedIn={isLoggedIn}
      isLoading={!isProfileLoaded}
      type="private"
    >
      <Layout navigation={<MainNavigation />}>
        <div>
          <h1>Profile</h1>
        </div>
      </Layout>
    </Page>
  );
};
