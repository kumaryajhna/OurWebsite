import React from 'react'
import Styles from './ourBlogs.module.scss'
import { Images } from '../../../shared/utils/images'
import { OurBlogsRecent } from '../../../shared/utils/arrayData'
import { LuDot } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Paths } from '../../../browserRouter/paths/paths';

const OurBlogs = ({ comp }) => {
      const navigate = useNavigate();
      const navigateAllBlogs =()=>{
        navigate(Paths.Blogs)
      }
    return (
        <div className={Styles.containerOurBlogs}>
            <h3><span>Our</span> Blogs</h3>

            <div className={Styles.blogsRecent}>
                {
                    comp &&
                    <div className={Styles.textRecent}>Recent blog posts</div>
                }
                <div className={Styles.blogs}>
                    <div className={Styles.blogsLeft}>

                        <img src={Images.blogUx} className={Styles.blogUxImg} />
                        <div className={Styles.blogContent}>
                            <h6>
                                Olivia Rhye
                                <LuDot size={20} />
                                <span className={Styles.blogDate}> 1 Jan 2023</span>
                            </h6>
                            <span className={Styles.arrowText}>
                                <h4>UX review presentations</h4>
                                <LuArrowUpRight />
                            </span>
                            <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            <div>
                                <span className={Styles.courceDesign}>Design</span>
                                <span className={Styles.courceResearch}>Research</span>
                                <span className={Styles.courcePresentation}>Presentation</span>


                                {/* <span className={Styles.cource}>{blog.cource}</span> */}
                            </div>
                        </div>
                    </div>
                    <div className={Styles.blogsLeftInfo}>
                        {OurBlogsRecent.map(blog => (
                            <div key={blog.id} className={Styles.blogItem}>
                                <div className={Styles.imageContainer}>
                                    <img src={blog.img} alt={blog.header} className={Styles.blogImage} />

                                </div>
                                <div className={Styles.blogContent}>
                                    <h6>
                                        {blog.name}
                                        <LuDot size={20} />
                                        <span className={Styles.blogDate}>{blog.date}</span>
                                    </h6>
                                    <h4>{blog.header}</h4>
                                    <p>{blog.discrption}</p>
                                    <div>
                                        <span className={Styles.courceDesign}>Design</span>
                                        <span className={Styles.courceResearch}>Research</span>

                                        {/* <span className={Styles.cource}>{blog.cource}</span> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {
                comp == "home" &&
                <div className={Styles.buttonBlock}>
                    <button className={Styles.btnArrow} onClick={navigateAllBlogs}><BsArrowRight size={16} /></button>
                </div>
            }
        </div>
    )
}

export default OurBlogs
