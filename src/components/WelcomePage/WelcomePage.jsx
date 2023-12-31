import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";
import addSrc from "images/add-contact.png"
import editSrc from "images/edit-contact.png"
import sortSrc from "images/sort-contact.png"
import favoriteSrc from "images/favorite-contact.png"
import searchSrc from "images/search-contact.png"
import addDeskSrc from "images/add-contact-desk.png"
import editDeskSrc from "images/edit-contact-desk.png"
import sortDeskSrc from "images/sort-contact-desk.png"
import searchDeskSrc from "images/search-contact-desk.png"
import favoriteDeskSrc from "images/favorite-contact-desk.png"
import { WelcomeLinks } from 'components/WelcomeLinks/WelcomeLinks';
import 'swiper/css';
import css from "./WelcomePage.module.css"

export const WelcomePage = () => {
  const windowWidth = useWindowSize().width;

  return (
    <div className={css.mainWrapper}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Welcome to <span className={css.part}>phonebook</span></h1>
        {windowWidth >= 768 && (
          <WelcomeLinks />  
        )}
      </div>
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className={css.slider}
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className={css.slide}>
          {windowWidth < 1199 ? (
            <img width="335" src={addSrc} alt='adding contact' />
          ): (
            <img width="700" src={addDeskSrc} alt='adding contact'></img>
          )} 
        </SwiperSlide>
      
        <SwiperSlide className={css.slide}>
          {windowWidth < 1199 ? (
            <img width="335" src={editSrc} alt='edit contact' />
          ): (
            <img width="700" src={editDeskSrc} alt='edit contact'></img>
          )} 
        </SwiperSlide>

        <SwiperSlide className={css.slide}>
          {windowWidth < 1199 ? (
            <img width="335" src={sortSrc} alt='sorting contact' />
          ): (
            <img width="700" src={sortDeskSrc} alt='sorting contact'></img>
          )} 
        </SwiperSlide>

        <SwiperSlide className={css.slide}>
          {windowWidth < 1199 ? (
            <img width="335" src={searchSrc} alt='searching contact' />
          ): (
            <img width="700" src={searchDeskSrc} alt='searching contact'></img>
          )} 
        </SwiperSlide>

        <SwiperSlide className={css.slide}>
          {windowWidth < 1199 ? (
            <img width="335" src={favoriteSrc} alt='adding contact to favorites' />
          ): (
            <img width="700" src={favoriteDeskSrc} alt='adding contact to favorites'></img>
          )} 
        </SwiperSlide>

      </Swiper>

      {windowWidth < 768 && (
        <WelcomeLinks />
      )}
    </div>
    
  )
}