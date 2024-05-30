import resets from '../_resets.module.css';
import { AvatarIcon } from './AvatarIcon.jsx';
import classes from './Card.module.css';


export default function Card() {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.avatar}>
        <AvatarIcon className={classes.icon} />
      </div>
      <div className={classes.supriyoKumarAich}>Supriyo Kumar Aich</div>
      <div className={classes.backendUIUXGaming}>Backend + UI/UX + Gaming</div>
    </div>
  );
}
