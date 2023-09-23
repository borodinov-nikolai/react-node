import React from 'react'



function Hits() {
  return (
    <section className="hits">
    <div className="container">
        <h2 className="hits__title">Хиты продаж!</h2>
        <div className="hits__images-main-holder">
            <div className="hits__images-left-holder">
                <img src='./img/xiaomi-book-pro-14-2022-1.jpg' alt=""  className="unvisible hits__img hits__img1"/>
                <div>
                    <img src='./img/smartfon-poco-f4-1.jpg' alt=""  className="hits__img hits__img2"/>
                    <img src='./img/cosollelele.jpg' alt=""  className="hits__img hits__img3"/>
                </div>
            </div>
            <div className="hits__images-right-holder">
                <div>
                    <img src='./img/756570375745373.jpg' alt=""  className="hits__img hits__img4"/>
                    <img src='./img/csm_teaser_87a40a99d2.jpg' alt=""  className="hits__img hits__img5"/>
                </div>
                <img src='./img/ipad-pro-m1-2021-cnet-2021-037.jpg' alt=""  className="hits__img hits__img6"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Hits