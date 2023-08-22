import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const ProfilePage = function ProfilePage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <h1>Profile</h1>
    </Page>
  );
};
