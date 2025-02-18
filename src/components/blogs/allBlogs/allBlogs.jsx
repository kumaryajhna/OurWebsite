import React from 'react'
import Styles from './allBlogs.module.scss'
import { AllBlogsCom } from "../../../shared/utils/arrayData"
import { LuDot } from "react-icons/lu";
import { LuArrowUpRight } from "react-icons/lu";

const AllBlogs = () => {
    return (
        <>
            <div className={Styles.containerAllBolgs}>
                <div className={Styles.textRecent}>All blog posts</div>
                <div className={Styles.AllBlogsInfo}>
                    {AllBlogsCom.map(blog => (
                        <div key={blog.id} className={Styles.blogItem}>
                            <div className={Styles.imageContainer}>
                                <img src={blog.img} alt={blog.header} className={Styles.blogImage} />
                            </div>
                            <div className={Styles.blogContent}>
                                <h6>
                                    {blog.name}
                                    <LuDot size={20} />
                                    <span className={Styles.date}>{blog.date}</span>
                                </h6>
                                <span className={Styles.arrowText}>
                                    <h4>{blog.header}</h4>
                                    <LuArrowUpRight />
                                </span>
                                <p>{blog.content}</p>
                                <div className={Styles.courceInfo}>
                                    {blog.cource.map((course, index) => (
                                        <span
                                            key={index}
                                        >
                                            {
                                                course == 'Leadership' &&
                                                <span className={Styles.courceLeadership}>{course}</span>
                                            }
                                            {
                                                course == 'Management' &&
                                                <span className={Styles.courceManagement}>{course}</span>
                                            }
                                            {
                                                course == 'Product' &&
                                                <span className={Styles.courceProduct}>{course}</span>
                                            }
                                            {
                                                course == 'Research' &&
                                                <span className={Styles.courceResearch}>{course}</span>
                                            }
                                            {
                                                course == 'Design' &&
                                                <span className={Styles.courceDesign}>{course}</span>
                                            }
                                            {
                                                course == 'Frameworks' &&
                                                <span className={Styles.courceFrameworks}>{course}</span>
                                            }
                                            {
                                                course == 'Software Development' &&
                                                <span className={Styles.courceDevelopment}>{course}</span>
                                            }
                                            {
                                                course == 'Tools' &&
                                                <span className={Styles.courceTools}>{course}</span>
                                            }
                                            {
                                                course == 'SaaS' &&
                                                <span className={Styles.courceSaas}>{course}</span>
                                            }
                                            {
                                                course == 'Podcasts' &&
                                                <span className={Styles.courcePodcasts}>{course}</span>
                                            }
                                            {
                                                course == 'Customer Success' &&
                                                <span className={Styles.courceCustomer}>{course}</span>
                                            }
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    {/* <span className={Styles.courceResearch}>Research</span> */}

                                    {/* <span className={Styles.cource}>{blog.cource}</span> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllBlogs
