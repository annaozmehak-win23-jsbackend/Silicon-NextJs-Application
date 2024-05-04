'use Client'

import styles from './BookmarkBtn.module.css';

interface BookmarkBtnProps {
    itemId: string;
}


export default function BookmarkBtn({itemId}: BookmarkBtnProps) {
    return (
        // <button onClick={() => console.log(itemId)} className="btn btn-circle bookmark">
        <button className={`btn btn-circle ${styles.bookmark}`}>
            <i className="fa-regular fa-bookmark"></i>
        </button>
        
    );
}