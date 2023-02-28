import React, { memo } from "react";
import footerData from "@/assets/data/footer";
import { FooterWrapper } from "./style";
const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        {footerData.map((item) => {
          return (
            <div className="footer-item" key={item.name}>
              <div className="name">{item.name}</div>
              <ul>
                {item.list.map((listItem) => {
                  return (
                    <li key={listItem}>
                      <a href="/">{listItem}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="statement">
        @ 2022 Airbnb,lnc.All rights
        reserved.条款·隐私政策·网站地图·全国旅游投诉渠道 12301
      </div>
    </FooterWrapper>
  );
});

export default Footer;
