import { MiddleHeader } from "./MiddleHeader/MiddleHeader"
import { TopHeader } from "./TopHeader/TopHeader"
import styles from "./Header.module.css"

export const Header = ({title, description, peoples, titleCheck, imgSrc, bgFiltered}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__wrap}>
                    <img src={imgSrc} alt="bg изображение" className={styles.bgImg}/>
                    <div className={bgFiltered}>
                        <div className={styles.container}>
                            <TopHeader />
                            <MiddleHeader
                                title={title} 
                                description={description} 
                                peoples={peoples}
                                titleCheck={titleCheck}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}