import Link from "next/link";
import styles from "./Header.module.css";
import { cookies } from "next/headers";

export default function Header() {
  const isSignedIn = cookies().get('Authorization')

    return (
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <Link className="logo" href="/">
            <img src="/images/solid.svg" alt="logo" />
          </Link>

          <nav className={styles.nav}>
            <Link href="#overview">Overview</Link>
            
            {isSignedIn 
            ? ( <Link href="/courses">Courses</Link> )
            : ( <Link href="#features">Features</Link> )
            }

            <Link href="/contact">Contact</Link>
          </nav>

          <div className={`btn-switch ${styles.btnSwitch}`}>
            <label className="switch-label">Light</label>
            <label className="switch" htmlFor="switch-mode">
                <input className="switch-input" type="checkbox" id="switch-mode" />
                <span className="slider round"></span>
            </label>
            <label className="switch-label">Dark</label>
          </div>

          <div className={styles.accountButtons}>
          
            {isSignedIn 
            ? ( 
              <div className="profile">
                <div className="profile-image">
                  <Link href="/account/details">
                    <img src="/images/avatar.svg" alt="avatar" />
                  </Link>
                </div>
              </div>
             )
            : ( 
              <>  
                <Link className="btn btn-gray" href="/signin"><i className="btn-icon fa-regular fa-arrow-right-to-bracket"></i> Sign in</Link>
                <Link className="btn btn-theme" href="/signup"><i className="btn-icon fa-regular fa-user"></i>Sign up</Link>
              </>
            )
            }

          </div>
        </div>
      </header>
    );
}