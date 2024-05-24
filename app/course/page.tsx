'use client'

import { useEffect, useState } from 'react';
import ProgramDetails from '../components/singleCourse/ProgramDetails';
import styles from './Course.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { CourseContent } from "@/app/interfaces/coursesTypes";

export default function Course() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState<CourseContent | null>(null);

    const query = `
    query {
      getCourses {
        id
        isBestSeller
        title
        ingress
        isDigital
        content {
            description
            includes
            programDetails {
                description
                title
            }
        }
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
    }
  `;
  const json = JSON.stringify({ query });
  
    useEffect(() => {
        if (!id) return;

      fetch("http://localhost:7180/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json
      })
        .then((res) => res.json())
        .then((result) => {
            const fetchedCourses: CourseContent[] = result.data.getCourses;
            const matchedCourse = fetchedCourses.find((course: CourseContent) => course.id === id);
            setCourse(matchedCourse || null);
            setLoading(false);
        });
    }, [id]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (!course) {
        return <div>Course not found</div>;
    }
    
    return (
        <section className={styles.course}>
        {/* { */}
             {/* courses.map((data) => (
             <> */}
                
                <div className={styles.courseImage}>
                    <img className={styles.image} src="/images/course1-bg.svg" alt="Course image" />
                </div>
                <div className={`container ${styles.container}`}>
                    <div className={styles.showcaseContainer}>
                        <div className={styles.breadcrumbs}>
                            <p><i className={`${styles.breadcrumbIcon} icon fa-solid fa-house`}></i> Home</p>
                            <i className={`${styles.breadcrumbIcon} icon fa-solid fa-angles-right`}></i>
                            <p>Courses</p>
                            <i className={`${styles.breadcrumbIcon} icon fa-solid fa-angles-right`}></i>
                            <p className="current-page">{course.title}</p>
                        </div>
                        <div className={styles.tags}>
                                <div id={styles.review}>
                                    <p className={styles.tagName}>Best Seller</p>
                                </div>
                                <div id={styles.category} className="tag">
                                    <p className={styles.tagName}>Digital</p>
                                </div>
                        </div>
                        <div className={styles.title}>
                            <h1 className={styles.courseTitle}>{course.title}</h1>
                            <p className={styles.courseDescription}></p>
                            <div className={styles.courseInfo}>
                                <div className={styles.stars}>
                                    <div className={styles.star}></div>
                                    <div className={styles.star}></div>
                                    <div className={styles.star}></div>
                                    <div className={styles.star}></div>
                                    <div className={styles.star}></div>
                                    <div className={styles.reviewCount}>(1.2K reviews)</div>
                                </div>
                                <p className={styles.likes}><i className="icon fa-regular fa-thumbs-up"></i> @Model.LikesInNumbers likes</p>
                                <p className={styles.duration}><i className="icon fa-regular fa-clock"></i> @Model.Hours hours</p>
                            </div>
                            <div className={styles.authorInfo}>
                                <img src="/images/author-img.svg" alt="" />
                                <div>
                                    <p className={styles.createdBy}>Created by</p>
                                    <p className={styles.createdBy}>@Model.Author</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <CourseContent /> */}
                    <ProgramDetails />
                </div>
                {/* </>
            ))
        } */}
       
           
        </section>
    );
}