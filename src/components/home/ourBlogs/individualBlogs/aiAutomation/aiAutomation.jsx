import React, { useState } from 'react'
import Styles from "./aiAutomation.module.scss"
import { QuickComparisonDev, QuickComparisonDevBus } from '../../../../../shared/utils/arrayData'
import ContactusDialogBoxMobile from '../../../../contactus/contactusDialogBoxMobile/contactusDialogBoxMobile'
import ContactUsDialogBox from '../../../../contactus/contactusDialogBox/contactusDialogBox'
import Footer from '../../../../../layout/footer/footer'
import { Images } from '../../../../../shared/utils/images'
import { IoMdCloudOutline } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";
import UseScrollToTop from '../../../../../shared/hooks/useScrollToTop'

const AiAutomation = () => {
  UseScrollToTop()
    
    const [open, setOpen] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    return (
        <>
            <div className={Styles.containerSoftwareDominatesMain}>
                <div className={Styles.containerSoftwareDominates}>
                    <h2>How AI and Automation are Transforming Software Development</h2>
                    <h6>Olivia Rhye • 1 Jan 2023</h6>
                    <img src={Images.aiAutomation} className={Styles.mainImg} />
                    {/* <p>How AI and Automation are Transforming Software Development</p> */}
                    <p>The software development landscape is evolving faster than ever, and at the heart of this transformation are two game-changing forces — Artificial Intelligence (AI) and Automation. From speeding up coding processes to improving software quality and enhancing decision-making, AI and automation are reshaping how software is built, tested, and maintained.</p>

                    <div className={Styles.question} > <img src={Images.rocketBlog} className={Styles.blogImg} /> <b>1. Accelerated Coding and Development</b></div>
                    <p>Traditionally, software development involves a lot of manual coding, which is time-intensive and prone to human error. With AI-powered code generation tools, developers can now generate boilerplate code, suggest optimized code snippets, and even auto-complete entire functions. Tools like GitHub Copilot and Tabnine are prime examples, assisting developers in real-time and dramatically reducing development time.</p>


                    <div className={Styles.question}><b>Benefits:</b></div>
                    <ul className={Styles.blinkingListDev} >
                        <li className={Styles.blinkingDotDev}>Faster coding cycles</li>
                        <li className={Styles.blinkingDotDev}>Reduced repetitive tasks </li>
                        <li className={Styles.blinkingDotDev}>Improved productivity for developers</li>
                    </ul>


                    <div className={Styles.question}><img src={Images.checkboxTick} className={Styles.blogImg} /><b>2. Smarter Testing and Bug Detection</b></div>
                    <p>Software testing is critical but often time-consuming. AI-driven automated testing tools can intelligently create test cases, detect patterns in defects, and predict potential failure points. By analyzing historical data, these tools can identify areas most likely to contain bugs, helping developers focus on high-risk areas first.</p>


                    <div className={Styles.question}><b>Benefits:</b></div>
                    <ul className={Styles.blinkingListDev} >
                        <li className={Styles.blinkingDotDev}>Faster test cycles</li>
                        <li className={Styles.blinkingDotDev}>Improved accuracy and coverage</li>
                        <li className={Styles.blinkingDotDev}>Early bug detection and reduced rework</li>
                    </ul>


                    <div className={Styles.question}><img src={Images.graphBar} className={Styles.blogImg} /><b>3. Intelligent Project Management</b></div>
                    <p>AI and automation are not just transforming code creation but also the way software projects are managed. Modern project management tools equipped with AI can predict project delays, recommend resource allocation, and suggest process improvements based on historical performance data. This data-driven decision-making reduces risks and improves project success rates.</p>

                    <div className={Styles.question}><b>Benefits:</b></div>
                    <ul className={Styles.blinkingListDev} >
                        <li className={Styles.blinkingDotDev}>Proactive risk management</li>
                        <li className={Styles.blinkingDotDev}>Improved team collaboration</li>
                        <li className={Styles.blinkingDotDev}>Enhanced project timelines</li>
                    </ul>


                    <div className={Styles.question}><img src={Images.robotImg} className={Styles.blogImg} /><b>4. Continuous Integration & Deployment (CI/CD)</b></div>
                    <p>Automation has revolutionized CI/CD pipelines, ensuring faster delivery of high-quality software. With AI enhancements, these pipelines can predict deployment failures, automatically roll back faulty releases, and suggest improvements to the deployment process. This smart automation ensures a faster and more reliable release cycle.</p>

                    <div className={Styles.question}><b>Benefits:</b></div>
                    <ul className={Styles.blinkingListDev} >
                        <li className={Styles.blinkingDotDev}>Faster releases</li>
                        <li className={Styles.blinkingDotDev}>Reduced downtime</li>
                        <li className={Styles.blinkingDotDev}>Real-time performance insights</li>
                    </ul>


                    <div className={Styles.question}> <SlGlobe size={20} style={{ marginRight: '10px' }} color='#1C98CB' /><b>5. Enhanced Security and Compliance</b></div>
                    <p>AI-powered security tools actively monitor code and infrastructure for vulnerabilities, often catching issues that might be overlooked during manual reviews. Combined with automation, these tools can enforce security standards, automate compliance checks, and flag potential risks even before deployment.</p>

                    <div className={Styles.question}><b>Benefits:</b></div>
                    <ul className={Styles.blinkingListDev} >
                        <li className={Styles.blinkingDotDev}>Proactive threat detection</li>
                        <li className={Styles.blinkingDotDev}>Automated compliance tracking</li>
                        <li className={Styles.blinkingDotDev}>Improved data security</li>
                    </ul>

                    <div className={Styles.question}> <img src={Images.universe} className={Styles.blogImg} /><b>The Future is Cloud-First</b></div>
                    <p>The ultimate goal is not to replace developers but to empower them. AI is becoming a true co-developer, handling mundane and repetitive tasks while human developers focus on creative problem-solving, innovation, and architectural decisions. With advancements in natural language processing, developers could soon write entire programs by simply describing functionality in plain English.</p>

                    <div className={Styles.question}><b>Conclusion</b> </div>
                    <p>AI and automation are no longer futuristic concepts — they are already embedded in the software development lifecycle. From writing and testing code to managing projects and ensuring security, these technologies are accelerating innovation while improving quality and reducing costs. For software companies looking to stay competitive, embracing AI and automation is no longer optional — it’s essential.</p>

                    <div className={Styles.dottedLine}></div>

                    {/* <h3>Ready to make the move to cloud-first software? Our experts can help you select, implement, and customize the right cloud solutions for your business needs. Contact us today to get started!</h3> */}
                    <div className={Styles.buttonSection}>


                        <button className={Styles.btnAppointmentMobile}
                            onClick={() => {
                                setOpenMobile(true);
                                window.scrollTo(0, 0);
                            }}
                        >Talk to our expert</button>
                        <button className={Styles.btnAppointment}
                            onClick={() => {
                                setOpen(true);
                                window.scrollTo(0, 0);
                            }}
                        >Talk to our expert</button>

                    </div >


                    {open && <ContactUsDialogBox onClose={() => setOpen(false)} />}

                    {openMobile &&
                        <span className="mobileContactUs">
                            <ContactusDialogBoxMobile onClose={() => setOpenMobile(false)} />
                        </span>
                    }



                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default AiAutomation
