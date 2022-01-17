import { Component } from 'react';
import React from 'react';

class Hello extends Component {
    static defaultProps = {
        name:"이름" // defaultProps를 설정해 두면, props로 전달받은 값이 없을 때 설정해둔 기본값을 반환한다.
    }
    render(){
        const {color,name} = this.props;
        return(
        <div>
            {name}님 안녕하세요. 좋아하는 색은 {color}입니다.
        </div>
        )
    }
};

export default Hello;