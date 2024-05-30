
import classes from './Nav.module.css';
import resets from '../_resets.module.css';

const display = () => {
    console.log('nigga')
}
const Nav = () => {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.home}>
            <button className="underline decoration-sky-500">Home</button>
            </div>
            <div className={classes.skills}>
            <button className="underline decoration-yellow-500">Skills</button>
            </div>
            <div className={classes.about}>
            <button className="underline decoration-gray-500" onClick={display}>Contact</button>
            </div>
        </div>
    );
};

export default Nav;