import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

const Header: React.FC = React.memo(() => {
    return <div className={styles.header}>
        <div className={styles.left}>

            <h1>mybook</h1>

        </div>
        <div className={styles.right}>
            <Link to='/search'>
                <i className='icon-search'></i>
            </Link>
            <Link to='/shelf'>

                <i className='icon_shelf'></i>
            </Link>
        </div>
    </div>;
})
export default Header