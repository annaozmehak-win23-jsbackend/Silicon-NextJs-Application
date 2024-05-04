'use client'

import { useState } from "react";
import styles from "./SearchFilters.module.css";

export default function SearchFilters() {
    const [categories, setCategories] = useState([]);

    return (
        <form>
            <div className={styles.filterAndSearch}>
                <select name="categories" id={styles.categories}>
                    <option>All Categories</option>
                </select>
                <div className={styles.inputContainer}>
                    <input id={styles.searchQuery} name="searchQuery" placeholder="Search courses" />
                    <i className="fa-regular fa-search"></i>
                </div>
            </div>
        </form>
    );
}