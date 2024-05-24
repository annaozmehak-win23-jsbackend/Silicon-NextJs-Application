import styles from './TopTools.module.css';

export default function TopTools() {
    const topTools = [
        {
            image: '/images/icons/google-icon.svg',
            altText: 'Figma',
            text: 'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.'
        },
        {
            image: '/images/icons/zoom-icon.svg',
            altText: 'Slack',
            text: 'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.'
        },
        {
            image: '/images/icons/slack-icon.svg',
            altText: 'Zeplin',
            text: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            image: '/images/icons/gmail-icon.svg',
            altText: 'Figma',
            text: 'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.'
        }
    ]

    const bottomTools = [
    {
        image: '/images/icons/trello-icon.svg',
        altText: 'Slack',
        text: 'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.'
    },
    {
        image: '/images/icons/mailchimp-icon.svg',
        altText: 'Zeplin',
        text: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'
    },
    {
        image: '/images/icons/dropbox-icon.svg',
        altText: 'Figma',
        text: 'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.'
    },
    {
        image: '/images/icons/evernote-icon.svg',
        altText: 'Slack',
        text: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'
    }
    
    ]

  return (
        <section id={styles.integrateToolsSection}>
            <div className="container">
                <div className={styles.content}>
                    <h3 className={styles.title}>Integrate Top Work Tools</h3>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    <div className={styles.integrateTools}>
                        <div className={styles.tools}>
                            
                            {
                                topTools.map((tool) => ( 
                                    <div className={styles.tool} key={tool.text}>
                                        <img className={styles.toolImage} src={tool.image} alt={tool.altText} />
                                        <p className={styles.toolText}>{tool.text}</p>
                                    </div>
                                ))
                              
                            }
                        </div>
                        <div className={styles.tools}>
                            
                            {
                                bottomTools.map((tool) => (
                                    <div className={styles.tool} key={tool.text}>
                                        <img className={styles.toolImage} src={tool.image} alt={tool.altText} />
                                        <p className={styles.toolText}>{tool.text}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
  );
}
