import React, { Fragment } from 'react';
import FoodBtn from './FoodBtn';

const FoodItem = (props) => {
    return (
        <Fragment>
            <li key={props.item.get("id")} style={{ listStyle: "none", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={props.item.get("picture")} style={{ width: "100px" }} />
                    <div style={{ textAlign: "left" }}>
                        <h2>
                            {props.item.get("name")}
                        </h2>
                        <span>价格：{props.item.get("praise_num")}</span>
                    </div>
                </div>
                <FoodBtn item={props.item} addCount={()=>{props.addCount(props.item)}} reduceCount={()=>{props.reduceCount(props.item)}}></FoodBtn>

            </li>
        </Fragment>
    );
}


export default FoodItem;
