import AppLayout from '../layout';
import {UserProfile} from '@clerk/nextjs';

export default function Settings() {
  return (
    <div className="mx-auto w-full max-w-[800px] p-3 flex flex-col gap-4">
      <UserProfile appearance={{
        elements: {
            card: "shadow-none bg-transparent",
            navbar: "hidden"
        }
      }} />
    </div>
  );
}
Settings.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
