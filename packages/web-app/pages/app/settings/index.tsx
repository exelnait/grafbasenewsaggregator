import { Button } from '@mantine/core';
import AppLayout from '../layout';

export default function Settings() {
  return (
    <div className="mx-auto w-full max-w-[600px] p-3 flex flex-col gap-4">
      <Button isFullWidth={true} loadingText="" onClick={() => {}}>
        Sign out
      </Button>
    </div>
  );
}
Settings.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
