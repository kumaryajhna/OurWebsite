import React, { useEffect, useRef, useState } from 'react';
import Styles from './ourBlogs.module.scss';
import { Images } from '../../../shared/utils/images';
import { OurBlogsRecent } from '../../../shared/utils/arrayData';
import { LuDot } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Paths } from '../../../browserRouter/paths/paths';

const OurBlogs = ({ comp }) => {
    const navigate = useNavigate();
    const navigateAllBlogs = () => navigate(Paths.Blogs);
    const navigateSoftwareDominates = () => navigate(Paths.AiAutomation);
    const navigateIndividualBlog = (path) => navigate(path);



    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);

    useEffect(() => {
        const observerOptions = { threshold: 0.2 }; // Adjust visibility threshold

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.target === leftRef.current) {
                    setIsLeftVisible(entry.isIntersecting);
                } else if (entry.target === rightRef.current) {
                    setIsRightVisible(entry.isIntersecting);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);

        return () => {
            if (leftRef.current) observer.unobserve(leftRef.current);
            if (rightRef.current) observer.unobserve(rightRef.current);
        };
    }, []);

    return (
        <div className={Styles.containerOurBlogs}>
            <h3><span>Our</span> Blogs</h3>

            <div className={Styles.blogsRecent}>
                {/* {comp && <div className={Styles.textRecent}>Recent blog posts</div>} */}
                <div className={Styles.blogs}>
                    {/* Left Block */}
                    <div ref={leftRef} className={`${Styles.blogsLeft} ${isLeftVisible ? Styles.slideLeft : Styles.hidden}`} onClick={navigateSoftwareDominates}>
                        <img src={Images.blogAi} className={Styles.blogUxImg} />
                        <div className={Styles.blogContent}>
                            <h6>
                                Olivia Rhye <LuDot size={20} />
                                <span className={Styles.blogDate}> 1st Jan 2023</span>
                            </h6>
                            <span className={Styles.arrowText}>
                                <h4>How AI and Automation are Transforming Software Development</h4>
                                {/* <LuArrowUpRight /> */}
                            </span>
                            <p>The software development landscape is evolving faster than ever, and at the heart of this transformation  are two game-changing forces — Artificial Intell are two game-changing forces (AI) and Automation.</p>
                            {/* <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p> */}
                            {/* <div>
                                <span className={Styles.courceDesign}>Design</span>
                                <span className={Styles.courceResearch}>Research</span>
                                <span className={Styles.courcePresentation}>Presentation</span>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Block */}
                    <div ref={rightRef} className={`${Styles.blogsLeftInfo} ${isRightVisible ? Styles.slideRight : Styles.hidden}`}>
                        {OurBlogsRecent.map(blog => (
                            <div key={blog.id} className={Styles.blogItem}   onClick={() => navigateIndividualBlog(blog.path)}>
                                <div className={Styles.imageContainer}>
                                    <img src={blog.img} alt={blog.header} className={Styles.blogImage} />
                                </div>
                                <div className={Styles.blogContent}>
                                    <h6>
                                        {blog.name} <LuDot size={20} />
                                        <span className={Styles.blogDate}>{blog.date}</span>
                                    </h6>
                                    <h4>{blog.header}</h4>
                                    <p>{blog.discrption}</p>
                                    {/* <div>
                                        <span className={Styles.courceDesign}>Design</span>
                                        <span className={Styles.courceResearch}>Research</span>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* {comp === "home" && (
                <div className={Styles.buttonBlock}>
                    <button className={Styles.btnArrow} onClick={navigateAllBlogs}><BsArrowRight size={16} /></button>
                </div>
            )} */}
        </div>
    );
};

export default OurBlogs;
