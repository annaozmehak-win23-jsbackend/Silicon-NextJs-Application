'use client'

import { CourseContent } from "@/app/interfaces/coursesTypes";
import AddBookmarkBtn from "../bookmark/BookmarkBtn";
import Link from "next/link";
import styles from './CourseItem.module.css'
import { useEffect, useState } from "react";


export default function CourseItem() {
    const [courses, setCourses] = useState<CourseContent[]>([]);

    const query = `
    query {
        getCourses {
        id
        isBestSeller
        imageUri
        title
        authors {
            name
        }
        prices {
            price
            currency
            discount
        }
        hours
        likesInProcent
        likes
        }
    }`;
    const json = JSON.stringify({ query });
      
        useEffect(() => {
          fetch("https://courseprovider-silicon-win23-annaozmehak.azurewebsites.net/api/graphql?code=CVCZN64AEFAJ7yBHc-pthwn1688UT39TE83HmqIlT2RlAzFuianevA%3D%3D", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: json
          })
            .then((res) => res.json())
            .then((result) => {
              setCourses(result.data.getCourses);
            });
    }, []);
        
    return (
        <div className={styles.courses}>
        { courses.map((data) => (
                <Link href={`/course/${data.id}`} className={styles.course} key={data.id}>
                    <div id="addMessage"></div>

                        <div className={styles.course}>
                            <div className="course-image">
                                {/* <img className={styles.courseImage} src={item.image} alt={item.title} /> */}
                                <img className={styles.courseImage} src={data.imageUri} alt="" />
                            </div>
                            <AddBookmarkBtn itemId={data.title} />
                            { data.isBestSeller ? (
                                    <div className={styles.tag}>
                                        <p className={styles.tagTitle}>Best Seller</p>
                                    </div>
                                ) : null
                            }
                            <div className={styles.courseInfo}>
                                <h2 className={styles.courseTitle}>{data.title}</h2>

                                <p className={styles.author}>
                                    {
                                        data.authors.map((author) => (
                                            <span key={author.name}>by {author.name}</span>
                                        ))
                                    }
                                </p>

                                {
                                    data.prices && (
                                        data.prices.discount > 0 ? (
                                            <div className={styles.priceWithSale}>
                                                <p className={styles.salesPrice}>${data.prices.discount}</p>
                                                <p className={styles.regularPrice}>${data.prices.price}</p>
                                            </div>
                                        ) : (
                                            <p className={styles.price}>${data.prices.price}</p>
                                        )
                                    )
                                }

                                <div className={styles.cardBottom}>
                                    <p className={styles.duration}><i className="fa-regular fa-clock"></i> {data.hours} hours</p>
                                    <p className={styles.rating}><i className="fa-regular fa-thumbs-up"></i> {data.likesInProcent} ({data.likes})</p>
                                </div>
                            </div>
                        </div>
                </Link>
            ))
        }
        </div>
        
    );
}