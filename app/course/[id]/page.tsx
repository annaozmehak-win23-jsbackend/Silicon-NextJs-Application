'use client'

import { useEffect, useState } from 'react';
import ProgramDetails from '../../components/singleCourse/ProgramDetails';
import styles from './Page.module.css';
import { CourseContent } from "@/app/interfaces/coursesTypes";
import CourseContentComponent from '@/app/components/singleCourse/CourseContent';

export default function Page({params}: {params: {id: string}}) {
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState<CourseContent | null>(null);

    const query = `
    query GetCourseById($id: String!){
        getCourseById(id: $id) {
        id
        isBestSeller
        isDigital
        imageUri
        title
        ingress
        starRating
        categories
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
        reviews
        likes
        content {
          description
          includes
          programDetails {
            id
            description
            title
          }
        }
      
      }
    }
  `;

  const json = JSON.stringify({ query });

   const handleGetCourse = (id: string) => {
        fetch("https://courseprovider-silicon-win23-annaozmehak.azurewebsites.net/api/graphql?code=CVCZN64AEFAJ7yBHc-pthwn1688UT39TE83HmqIlT2RlAzFuianevA%3D%3D", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({query, variables: {id: id}})
        })
            .then((res) => res.json())
            .then((result) => {
            setCourse(result.data.getCourseById);
            setLoading(false);
            });
    }
    useEffect(() => {
        handleGetCourse(params.id);
    }, []);

    if (!course) {
        return <div>Course not found</div>;
    }
    
    return (
        <section className={styles.course}>              
            <div className={styles.courseImage}>
                 <img className={styles.image} src={course.imageUri} alt="Course image" />
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
                               
                        {
                            course.isBestSeller && (
                                <div id={styles.review}>
                                    <p className={styles.tagName}>Bestseller</p>
                                </div>
                            )
                        }
                                    
                        {
                            course.isDigital && (
                                <div id={styles.category} className="tag">
                                    <p className={styles.tagName}>Digital</p>
                                </div>
                            )
                        }
                              
                    </div>
                    <div className={styles.title}>
                        <h1 className={styles.courseTitle}>{course.title}</h1>
                        <p className={styles.courseDescription}>{course.ingress}</p>
                        <div className={styles.courseInfo}>
                            <div className={styles.stars}>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.reviewCount}>({course.reviews} reviews)</div>
                            </div>
                            <p className={styles.likes}><i className="icon fa-regular fa-thumbs-up"></i> {course.likes} likes</p>
                            <p className={styles.duration}><i className="icon fa-regular fa-clock"></i> {course.hours} hours</p>
                        </div>
                        <div className={styles.authorInfo}>
                            <img src="/images/author-img.svg" alt="" />
                            <div>
                                <p className={styles.createdBy}>Created by</p>
                                <p className={styles.createdBy}>{course.authors.map((author) => author.name)}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <CourseContentComponent courseContent={course.content} price={course.prices} />
                <ProgramDetails programDetails={course.content.programDetails} />
            </div>      
        </section>
    );
}