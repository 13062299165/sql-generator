import { addDict } from '@/services/dictService';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const DictPage: FC<IProps> = () => {
  async function testRequest() {
    try {
      const result = await addDict({ name: 'hei', content: 'code' });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  testRequest();
  return <div>DictPage</div>;
};

export default DictPage;
