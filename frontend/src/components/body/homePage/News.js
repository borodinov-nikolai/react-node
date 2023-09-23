import React from 'react'



function News() {
  return (
    <section className="news">
        <div className="container">
            <h2 className="news__title">Новости!</h2>
            <div className="news__items-holder">
                <div className="news__item news__item1" data-news-item="1">
                    <div className="news__text-holder">
                        <h3 className="news__item-title">Google исправила проблему перегрева и быстрого разряда Pixel 6 и 7</h3>
                        <p className="news__item-text">На днях мы писали о том, что Google снова умудрилась "поломать" свои
                            смартфоны Pixel после рассылки майского патча безопасности. Напомним, тогда пользователи целой
                            группы устройств во главе с актуальным флагманом Pixel 7 жаловались на быстрый разряд и
                            перегрев…</p>
                    </div>
                    <img src=  './img/obzor_pixel_6_pro_picture12_0_resize.jpg' alt="" className="news__item-img"/>

                </div>
                <div className="news__item news__item2" data-news-item="2">
                    
                    <img src='./img/ogranichennaa_seria_realme_gt_neo_5_se_v_stile_transformerov_na_podhode_picture2_0_resize.jpg'
                    alt="" className="news__item-img"/>
                    <div className="news__text-holder">
                        <h3 className="news__item-title">Ограниченная серия Realme GT Neo 5 SE в стиле Трансформеров на подходе
                        </h3>
                        <p className="news__item-text">Все любят крутые лимитки хитовых смартфонов. Чего только стоит шикарный
                            Redmi Note 12 Turbo в стиле Гарри Поттера. Не отставать решила и Realme, которая заготовила
                            спецверсию Realme GT Neo 5 SE – прямого конкурента детища Redmi…</p>
                    </div>

                </div>
                <div className="news__item news__item3" data-news-item="3">
                    <div className="news__text-holder">
                        <h3 className="news__item-title">MediaTek готовит чипсет с "графикой" NVIDIA, но это не Dimensity 9300
                        </h3>
                        <p className="news__item-text">В конце февраля мы писали о том, что MediaTek договаривается с NVIDIA о
                            совместной работе на графической подсистемой для мобильных чипсетов следующего поколения. Теперь
                            эта тема поднята снова. Digitimes сообщает, что графическому чипу NVIDIA во флагманском чип…</p>
                    </div>
                    <img src='./img/mediatek_poprobuet_pobedit_qualcomm_vo_flagmanah_za_schet_nvidia_picture2_0_resize.jpg'
                        alt="" className="news__item-img"/>

                </div>
                <div className="news__item news__item4" data-news-item="4">
                    
                    <img src='./img/honor_90_pokazhut_do_konca_maa_pervyj_vzglad_na_oficialnom_tizere_picture2_0_resize.jpg'
                    alt="" className="news__item-img"/>
                    <div className="news__text-holder">
                        <h3 className="news__item-title">Honor 90 покажут до конца мая: первый взгляд на официальном тизере</h3>
                        <p className="news__item-text">Honor на конец мая приготовила обновление номерной серии, которая вновь
                            будет опираться на дизайн и возможности камер. Сегодня было официально подтверждено, что
                            презентация китайской компании пройдет 29 мая в Китае, о чем радостно сообщает опубликованный
                            тизер…</p>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default News