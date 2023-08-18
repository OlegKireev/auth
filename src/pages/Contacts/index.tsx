import { MainNavigation } from '@/features/app-navigation';
import { useAuthContext } from '@/entities/user';
import { Layout, Page } from '@/shared';

export const ContactsPage = function ContactsPage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="private"
    >
      <Layout navigation={<MainNavigation />}>
        <div>
          <h1>Contacts</h1>
        </div>
      </Layout>
    </Page>
  );
};
