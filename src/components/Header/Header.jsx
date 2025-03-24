import { MiddleHeader } from "./MiddleHeader/MiddleHeader"
import { TopHeader } from "./TopHeader/TopHeader"
import styles from "./Header.module.css"
import anotherStyles from "./MiddleHeader/MiddleHeader.module.css";
import stylesTopHeader from './TopHeader/TopHeader.module.css'

export const Header = ({title, description, peoples, titleCheck, imgSrc, bgFiltered, changeFontFamily, handClass}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrap}>
                    <img src={imgSrc} alt="bg изображение" className={styles.bg_img}/>
                    <div className={bgFiltered}>
                        <div className={styles.container}>
                            <TopHeader 
                            theme={stylesTopHeader.link}
                            />
                            <MiddleHeader
                                title={title}
                                theme={changeFontFamily ? anotherStyles.description : anotherStyles.description_alt} 
                                description={description} 
                                peoples={peoples}
                                titleCheck={titleCheck}
                                handClass={handClass}
                            />
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}