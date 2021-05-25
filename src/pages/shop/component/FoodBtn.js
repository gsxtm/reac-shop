import React, { Fragment } from 'react';
import {Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const FoodBtn = (props) => {
    return (
        <Fragment>
            <div style={{ margin: "0 10px 0 0" }}>
                {/* {props.item.get("count")} */}
                {props.item.get("count") !== 0 ? <Button onClick={()=>{props.reduceCount(props.item)}} size="small" type="primary" shape="circle" icon={<MinusOutlined />}></Button> : ""}
                <span style={{ padding: "0 5px" }}>{props.item.get("count")}</span>
                <Button onClick={()=>{props.addCount(props.item)}} size="small" type="primary" shape="circle" icon={<PlusOutlined />}></Button>
            </div>
        </Fragment>
    );
}


export default FoodBtn;
