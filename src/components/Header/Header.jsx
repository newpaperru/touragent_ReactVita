import { MiddleHeader } from "./MiddleHeader/MiddleHeader"
import { TopHeader } from "./TopHeader/TopHeader"
import styles from "./Header.module.css"
import logo from "/logo.svg";
import stylesTopHeader from './TopHeader/TopHeader.module.css'

export const Header = ({title, description, peoples, titleCheck, imgSrc, bgFiltered}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrap}>
                    <img src={imgSrc} alt="bg изображение" className={styles.bg_img}/>
                    <div className={bgFiltered}>
                        <div className={styles.container}>
                            <TopHeader 
                            logoImg={logo}
                            theme={stylesTopHeader.link}
                            />
                            <MiddleHeader
                                title={title} 
                                description={description} 
                                peoples={peoples}
                                titleCheck={titleCheck}
                            />
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}