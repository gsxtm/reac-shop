import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import FoodItem from './component/FoodItem';

class ShopList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.changeShopData();
    }
    render() {
        const { lists } = this.props;

        return (
            <>
                <Row>
                    <Col span={24}>
                        <ul style={{ display: "flex", flexDirection: "column", margin: 0, padding: 0 }}>
                            {/* {console.log(lists)} */}
                            {lists.map((item) => {
                                return (
                                    <FoodItem key={item.get("id")} item={item} addCount={this.props.addCount.bind(this, item)} reduceCount={this.props.reduceCount.bind(this, item)}></FoodItem>
                                    //         <li key={item.get("id")} style={{ listStyle: "none", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    //        <div style={{ display: "flex", flexDirection: "row" }}>
                                    //          <img src={item.get("picture")} style={{ width: "100px" }} />
                                    //         <div style={{ textAlign: "left" }}>
                                    //         <h2>
                                    //                  {item.get("name")}
                                    //        </h2>
                                    //           <span>价格：{item.get("praise_num")}</span>
                                    //   </div>
                                    //        </div>
                                    //       <FoodBtn item={item} addCount={this.props.addCount.bind(this,item)} reduceCount={this.props.reduceCount.bind(this,item)}></FoodBtn>
                                    //      {/* <div style={{ margin: "0 10px 0 0" }}>
                                    //             {item.get("count")!==0? <Button onClick={this.props.reduceCount.bind(this,item)} size="small" type="primary" shape="circle" icon={<MinusOutlined />}></Button> :""}
                                    //             <span style={{ padding: "0 5px" }}>{item.get("count")}</span>
                                    //           <Button onClick={this.props.addCount.bind(this,item)} size="small" type="primary" shape="circle" icon={<PlusOutlined />}></Button>
                                    //      </div> */}
                                    //       </li>
                                )
                            })}
                        </ul>
                        <div>num：{lists.reduce((res,item)=>{
                            // console.log(res);
                            console.log(item.get("praise_num"));
                            return res+=item.get("praise_num")*item.get("count");
                        },0)}</div>

                        <div >
                        {lists.map((item) => {
                            if(item.get("count")!==0){
                                return (
                                    <FoodItem key={item.get("id")} item={item} addCount={this.props.addCount.bind(this, item)} reduceCount={this.props.reduceCount.bind(this, item)}></FoodItem>
                                )
                            }else{
                                <div>没有商品</div>
                            }
                            })}
                        </div>
                        <button onClick={this.props.emptyCount.bind(this)}>清空购物车</button>
                    </Col>
                </Row>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    lists: state.shop.get("lists")
})
const mapDispatchToProps = (dispatch) => ({
    changeShopData() {
        dispatch(actionCreators.getDataList());
    },
    addCount(item) {
        dispatch(actionCreators.addCount(item.get("id")));
    },
    reduceCount(item) {
        dispatch(actionCreators.reduceCount(item.get("id")));
    },
    emptyCount() {
        dispatch(actionCreators.emptyCount());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopList);