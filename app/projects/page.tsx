import Image from 'next/image'
import styles from '../styles.module.css'

export default function Page() {
    return <div className={styles.page_div}>
       <h1 className={styles.page_name}>Projects</h1>
       <div className={styles.projects_div}>
            <div className={styles.projects_div_1}>
                <Image
                    className={styles.projects_image}
                    src='../projects/node_express_cli.png'
                    alt='node_express_cli'
                    width={200}
                    height={150}
                />
            </div>
            <div className={styles.projects_div_2}>
                <h2 className={styles.projects_title}>create-node-express</h2>
                <div className={styles.projects_description}>
                    <p>A cli to create a bare express app.</p>
                    <p>With just a single command (create-node-express), the cli will ask for the project name and port number and you can now have a node application with the correct dependencies installed.</p>
                    <p>Visit the project <a href="https://github.com/anne-montoya/scaffold-node-express-cli" target="_blank">here</a>.</p>
                    <br></br>
                    <div className={styles.projects_tech_stack}>
                        <div className={styles.projects_tech}>node.js</div>
                        <div className={styles.projects_tech}>express</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.projects_div}>
            <div className={styles.projects_div_1}>
                <Image
                    className={styles.projects_image}
                    src='../projects/5g_project.jpeg'
                    alt='5g_project'
                    width={200}
                    height={150}
                />
            </div>
            <div className={styles.projects_div_2}>
                <h2 className={styles.projects_title}>RAN Planning and Optimization (Samsung R&D Institute PH)</h2>
                <div className={styles.projects_description}>
                    <p>New and Advanced Network Planning for 5G Networks</p>
                    <p>For more info, please visit this <a href="https://www.samsung.com/global/business/networks/insights/blog/0414-ran-planning-and-optimization/" target="_blank">link</a>.</p>
                    <br></br>
                    <div className={styles.projects_tech_stack}>
                        <div className={styles.projects_tech}>three.js</div>
                        <div className={styles.projects_tech}>react.js</div>
                        <div className={styles.projects_tech}>node.js</div>
                        <div className={styles.projects_tech}>express</div>
                        <div className={styles.projects_tech}>mongodb</div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={styles.projects_div}>
            <div className={styles.projects_div_1}>
                <Image
                    className={styles.projects_image}
                    src='../projects/illegal_drug.png'
                    alt='illegal_drug'
                    width={200}
                    height={150}
                />
            </div>
            <div className={styles.projects_div_2}>
                <h2 className={styles.projects_title}>Illegal Drug Event Detection on Twitter</h2>
                <div className={styles.projects_description}>
                    <p className={styles.projects_description}>A web application that classify and maps tweets on Google maps</p>
                    <p>Read more about the research <a href="https://web.archive.org/web/20201015074951/https://sites.google.com/a/up.edu.ph/illegal-drug-event-detection/" target="_blank">here</a>.</p>
                    <br></br>
                    <div className={styles.projects_tech_stack}>
                        <div className={styles.projects_tech}>angular.js</div>
                        <div className={styles.projects_tech}>node.js</div>
                        <div className={styles.projects_tech}>express</div>
                        <div className={styles.projects_tech}>java</div>
                        <div className={styles.projects_tech}>mongodb</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}