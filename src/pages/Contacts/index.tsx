import { MainNavigation } from '@/features/app-navigation';
import { Layout } from '@/shared';

export const ContactsPage = function ContactsPage() {
  return (
    <Layout navigation={<MainNavigation />}>
      <div>
        <h1>Contacts</h1>
      </div>
    </Layout>
  );
};
