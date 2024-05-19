import { memo } from 'react';
import type { FC } from 'react';

import resets from '../components/_resets.module.scss';
import { Dashboard } from '../components/Dashboard/Dashboard';
import classes from './App.module.scss';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Dashboard />
    </div>
  );
});
