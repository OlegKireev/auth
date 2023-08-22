import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const HomePage = function HomePage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <h1>Welcome!</h1>
    </Page>
  );
};
