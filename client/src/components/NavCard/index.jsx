import React, { useMemo } from "react";
import { View, Text, Image } from "@tarojs/components";
import { NCard } from "@/components";
import classNames from "classnames";
import "./index.scss";
// { className = "", title, navs = [], onClick }
function NavCard({title, onClick,navs = [], className = ""  }){
    // const { className="" ,title, navs=[] ,onClick} = props

  return useMemo(() => {
    console.log("navcard1");
    return (
      <NCard className={classNames(className, "mb-1 nav-card")}>
        {title && <View>{title}</View>}
        <View className="nav-card--body">
          {navs.map((item, idx) => {
            return (
              <View
                className="nav-item"
                key={idx}
                onClick={(e) => onClick(idx, e)}
              >
                <Image className="nav-icon" src={item.image}></Image>
                <Text className="nav-label">{item.label}</Text>
              </View>
            );
          })}
        </View>
      </NCard>
    );
  },[title,navs]);
};
// export default React.memo(NavCard, areEqual);
export default NavCard;
